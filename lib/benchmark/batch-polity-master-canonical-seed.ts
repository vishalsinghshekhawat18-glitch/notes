// Indian Polity & Governance — Master Canonical Knowledge Seeder
// Mind of Aravalli — Academic Reading Hub
// Comprehensive 136 Concepts, 25 Canonical Topics, 4-Block Architecture, 8-Exam Lenses & Expanded Practice Bank

import { db } from '../db/client';
import { MasterPolityConceptDefinition, POLITY_MASTER_PART_1_CONCEPTS } from './batch-polity-master-part1';
import { POLITY_MASTER_PART_2_CONCEPTS } from './batch-polity-master-part2';
import { POLITY_MASTER_PART_3_CONCEPTS } from './batch-polity-master-part3';
import { POLITY_MASTER_PART_4_CONCEPTS } from './batch-polity-master-part4';
import { POLITY_MASTER_PART_5_CONCEPTS } from './batch-polity-master-part5';

export const ALL_POLITY_MASTER_CONCEPTS: MasterPolityConceptDefinition[] = [
  ...POLITY_MASTER_PART_1_CONCEPTS,
  ...POLITY_MASTER_PART_2_CONCEPTS,
  ...POLITY_MASTER_PART_3_CONCEPTS,
  ...POLITY_MASTER_PART_4_CONCEPTS,
  ...POLITY_MASTER_PART_5_CONCEPTS,
];

export const CANONICAL_25_POLITY_TOPICS = [
  { order: 1, slug: 'basic-concepts-of-polity', title: 'Basic Concepts of Polity & Statecraft', description: 'Core political philosophy, elements of the state, Saptanga theory, systems of governance, and constitutionalism.' },
  { order: 2, slug: 'constituent-assembly', title: 'Constituent Assembly & Framing of Constitution', description: 'Demand, composition, working, committees, sources, and adoption of the Constitution.' },
  { order: 3, slug: 'preamble', title: 'The Preamble & Philosophy of the Constitution', description: 'Text, philosophical foundations, keywords, amendability, and basic structure status of the Preamble.' },
  { order: 4, slug: 'schedules-of-the-indian-constitution', title: 'Schedules & Language Framework', description: 'Schedules 1 to 12, tribal and scheduled areas (Fifth & Sixth Schedules), and Official Language provisions.' },
  { order: 5, slug: 'part-1-union-and-its-territory', title: 'Part I: Union and Its Territory', description: 'Articles 1 to 4, admission and establishment of states, boundary alteration, and cession of territory.' },
  { order: 6, slug: 'unification-of-india', title: 'Integration & Unification of Princely States', description: 'Accession of princely states, Sardar Patel and V.P. Menon role, Junagadh, Hyderabad, and Kashmir.' },
  { order: 7, slug: 'reorganisation-of-states', title: 'State Reorganisation & Zonal Councils', description: 'Dhar Commission, JVP Committee, Fazal Ali Commission (SRC 1956), linguistic reorganisation, and Zonal Councils.' },
  { order: 8, slug: 'part-2-citizenship', title: 'Part II: Citizenship Law & Articles 5–11', description: 'Constitutional citizenship at commencement, Citizenship Act 1955 acquisition/loss, CAA, NRC, and OCI.' },
  { order: 9, slug: 'part-3-fundamental-rights', title: 'Part III: Fundamental Rights Suite', description: 'Articles 12 to 35, Equality, Freedoms, Life & Liberty (Art 21 Golden Triangle), Secularism, and Article 32 Writs.' },
  { order: 10, slug: 'part-4-directive-principles-of-state-policy', title: 'Part IV & IV-A: DPSPs & Fundamental Duties', description: 'Articles 36 to 51, DPSP-FR harmony (Minerva Mills), and Article 51A Fundamental Duties.' },
  { order: 11, slug: 'the-union-executive', title: 'The Union Executive: President, VP, PM & Council of Ministers', description: 'Articles 52 to 78, Presidential election/impeachment, ordinance power (Art 123), pardons (Art 72), and Cabinet.' },
  { order: 12, slug: 'the-state-executive', title: 'Part VI: State Executive — Governor, CM & Advocate General', description: 'Articles 153 to 167, Governor constitutional discretion (Art 163), ordinances (Art 213), and state administration.' },
  { order: 13, slug: 'civil-services-and-public-services', title: 'Part XIV: Civil Services, Doctrine of Pleasure & Art 311', description: 'All India Services (Art 312), Doctrine of Pleasure (Art 310), and constitutional safeguards against dismissal (Art 311).' },
  { order: 14, slug: 'the-union-legislature', title: 'The Union Legislature: Parliament Architecture, Budget & Procedures', description: 'Articles 79 to 122, Rajya Sabha vs Lok Sabha, Money Bills (Art 110), Financial Bills, Joint Sitting (Art 108), and motions.' },
  { order: 15, slug: 'the-state-legislature', title: 'State Legislature: Vidhan Sabha, Vidhan Parishad & Procedures', description: 'Articles 168 to 212, Legislative Council creation/abolition (Art 169), legislative process, and Speaker powers.' },
  { order: 16, slug: 'the-union-judiciary', title: 'The Union Judiciary: Supreme Court, Collegium & Jurisdiction', description: 'Articles 124 to 147, appointments (Collegium evolution), Original/Appellate/Advisory jurisdiction, and Art 142.' },
  { order: 17, slug: 'the-state-judiciary', title: 'State Judiciary: High Courts, Subordinate Courts & Rajasthan HC', description: 'Articles 214 to 237, writ jurisdiction (Art 226 vs 32), superintendence (Art 227), and Rajasthan High Court at Jodhpur.' },
  { order: 18, slug: 'judicial-innovation-and-tribunals', title: 'Judicial Review, PIL & Tribunals Architecture', description: 'Basic structure judicial review, Public Interest Litigation, and Part XIV-A Administrative Tribunals (L. Chandra Kumar).' },
  { order: 19, slug: 'centre-state-relations-and-federalism', title: 'Centre-State Relations, Federal Finance & Inter-State Disputes', description: 'Articles 245 to 293, Seventh Schedule lists, GST Council (Art 279A), Inter-State Council (Art 263), and River Disputes.' },
  { order: 20, slug: 'emergency-provisions-and-safeguards', title: 'Part XVIII: Emergency Provisions & Safeguards', description: 'National Emergency (Art 352 / 358-359), President Rule (Art 356 / S.R. Bommai), and Financial Emergency (Art 360).' },
  { order: 21, slug: 'local-governance-panchayats-and-municipalities', title: 'Rural & Urban Local Governance: 73rd/74th CAAs & PESA', description: '73rd and 74th Constitutional Amendment Acts, Eleventh/Twelfth Schedules, PESA Act 1996, and 50% women reservation.' },
  { order: 22, slug: 'constitutional-bodies-eci-and-cag', title: 'Constitutional Bodies: ECI, CAG, UPSC, FC, NCSC, NCST, NCBC', description: 'Election Commission (Art 324), CAG (Arts 148-151), UPSC/SPSCs (Arts 315-323), Finance Commission (Art 280), and Articles 338-338B.' },
  { order: 23, slug: 'statutory-and-non-constitutional-bodies', title: 'Statutory & Quasi-Judicial Authorities: NGT, CVC, Lokpal, NCW, NCPCR, CAT', description: 'Statutory watchdogs: NGT Act 2010, RTI Act 2005 (CIC), CVC Act 2003, Lokpal Act 2013, NCW, NCPCR, RTE 2009, FRA 2006, and Whistleblowers Act.' },
  { order: 24, slug: 'rajasthan-state-polity-and-governance', title: 'Rajasthan State Polity, Watchdogs, Local Governance & Service Delivery Acts', description: 'RPSC Ajmer (1949/1956), SEC (1994), 6th SFC (7.5%), RSHRC (2000), Lokayukta (1973 Act), 1959 Nagaur, Guaranteed Services Act 2011, and Right to Hearing 2012.' },
  { order: 25, slug: 'comparative-constitutional-systems', title: 'Comparative Constitutional Systems, Party Recognition & Pressure Groups', description: 'Comparative models (UK, USA, Switzerland), RPA 1951 Sec 29A, Election Symbols Order 1968, 10th Schedule Anti-Defection, and Pressure Groups.' },
];

export async function seedPolityMasterCanonicalKnowledge(): Promise<void> {
  console.log(`Seeding Modernized Indian Polity Master Knowledge (${ALL_POLITY_MASTER_CONCEPTS.length} Concepts across 25 Topics)...`);

  // 1. Ensure Domain & Subject
  const domain = await db.domain.upsert({
    where: { slug: 'indian-governance-administration' },
    update: { name: 'Indian Governance & Administration' },
    create: {
      slug: 'indian-governance-administration',
      name: 'Indian Governance & Administration',
      description: 'Indian Constitution, Public Administration, Statecraft, Local Governance, Administrative Law and Governance Institutions.',
      order: 1,
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'indian-polity' },
    update: {
      name: 'Indian Polity & Governance',
      domainId: domain.id,
      description: 'Master Canonical Corpus of Indian Polity, Constitutional Law, Administrative Architecture, Governance Institutions and Comparative Systems.',
      scopeStatement: 'Comprehensive coverage of Indian Constitution, governance, administrative law, statutory bodies, and state administration.',
    },
    create: {
      slug: 'indian-polity',
      name: 'Indian Polity & Governance',
      domainId: domain.id,
      description: 'Master Canonical Corpus of Indian Polity, Constitutional Law, Administrative Architecture, Governance Institutions and Comparative Systems.',
      scopeStatement: 'Comprehensive coverage of Indian Constitution, governance, administrative law, statutory bodies, and state administration.',
      order: 1,
    },
  });

  // 2. Ensure Primary Authority Source
  const sourcePolity = await db.source.upsert({
    where: { id: 'source-constitution-of-india-canonical' },
    update: {},
    create: {
      id: 'source-constitution-of-india-canonical',
      title: 'Constitution of India (As Amended) & Official Statutory Enactments',
      author: 'Ministry of Law and Justice, Government of India & Supreme Court of India',
      sourceType: 'CONSTITUTION',
      authorityTier: 'PRIMARY_AUTHORITY',
      description: 'The authoritative constitutional text, legislative statutes, and landmark Supreme Court ratios governing the Republic of India.',
    },
  });

  // 3. Upsert All 8 Target Exams
  const exams = [
    { slug: 'upsc-apfc', name: 'UPSC APFC / EPFO', conductingBody: 'Union Public Service Commission' },
    { slug: 'rpsc-ras', name: 'RPSC RAS / RTS', conductingBody: 'Rajasthan Public Service Commission' },
    { slug: 'rbi-grade-b', name: 'RBI Grade B Officer', conductingBody: 'Reserve Bank of India' },
    { slug: 'nabard-grade-a', name: 'NABARD Grade A Assistant Manager', conductingBody: 'National Bank for Agriculture and Rural Development' },
    { slug: 'sbi-po', name: 'SBI Probationary Officer', conductingBody: 'State Bank of India' },
    { slug: 'ibps-po', name: 'IBPS Probationary Officer / MT', conductingBody: 'Institute of Banking Personnel Selection' },
    { slug: 'sebi-grade-a', name: 'SEBI Grade A Assistant Manager', conductingBody: 'Securities and Exchange Board of India' },
    { slug: 'iibf-dbf', name: 'IIBF Diploma in Banking & Finance', conductingBody: 'Indian Institute of Banking and Finance' },
  ];

  const examMap: Record<string, string> = {};
  for (const ex of exams) {
    const examRecord = await db.exam.upsert({
      where: { slug: ex.slug },
      update: { name: ex.name, conductingBody: ex.conductingBody },
      create: { slug: ex.slug, name: ex.name, conductingBody: ex.conductingBody },
    });
    const key = ex.slug.toUpperCase().replace(/-/g, '_');
    examMap[key] = examRecord.id;
  }

  // 4. Consolidate & Upsert Exactly 25 Canonical Topics
  const topicMap: Record<number, string> = {};
  for (const tDef of CANONICAL_25_POLITY_TOPICS) {
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
        subjectId: subject.id,
        slug: tDef.slug,
        title: tDef.title,
        description: tDef.description,
        order: tDef.order,
      },
    });
    topicMap[tDef.order] = topic.id;
  }

  // Clean up legacy concepts and dependent tables for indian-polity
  const existingPolityTopics = await db.topic.findMany({ where: { subjectId: subject.id } });
  const topicIds = existingPolityTopics.map(t => t.id);
  const existingPolityConcepts = await db.concept.findMany({ where: { topicId: { in: topicIds } } });
  const conceptIds = existingPolityConcepts.map(c => c.id);
  
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
  const canonicalSlugs = CANONICAL_25_POLITY_TOPICS.map(t => t.slug);
  for (const ext of existingPolityTopics) {
    if (!canonicalSlugs.includes(ext.slug)) {
      await db.topic.deleteMany({ where: { id: ext.id } });
    }
  }

  // 5. Seed / Upsert All 136 Modernized Canonical Concepts
  let conceptOrderInTopic: Record<number, number> = {};

  for (const cDef of ALL_POLITY_MASTER_CONCEPTS) {
    const topicId = topicMap[cDef.topicOrder];
    if (!topicId) {
      throw new Error(`Topic order ${cDef.topicOrder} not found for concept ${cDef.id}`);
    }

    if (!conceptOrderInTopic[cDef.topicOrder]) conceptOrderInTopic[cDef.topicOrder] = 1;
    const currentOrder = conceptOrderInTopic[cDef.topicOrder]++;

    // Upsert Concept
    const concept = await db.concept.upsert({
      where: { id: cDef.id },
      update: {
        topicId,
        slug: cDef.slug,
        title: cDef.title,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        order: currentOrder,
        status: 'PUBLISHED',
      },
      create: {
        id: cDef.id,
        topicId,
        slug: cDef.slug,
        title: cDef.title,
        shortDefinition: cDef.shortDefinition,
        difficulty: cDef.difficulty,
        order: currentOrder,
        status: 'PUBLISHED',
      },
    });

    // Clear and Recreate Claims & Evidence for idempotency
    const existingClaims = await db.claim.findMany({ where: { conceptId: concept.id } });
    for (const ec of existingClaims) {
      await db.evidence.deleteMany({ where: { claimId: ec.id } });
    }
    await db.claim.deleteMany({ where: { conceptId: concept.id } });

    for (let i = 0; i < cDef.claims.length; i++) {
      const cl = cDef.claims[i];
      const claimId = `CLM-${cDef.id}-${(i + 1).toString().padStart(2, '0')}`;
      const claim = await db.claim.create({
        data: {
          id: claimId,
          conceptId: concept.id,
          statement: cl.statement,
          claimType: cl.claimType,
          epistemicLevel: cl.epistemicLevel,
          confidence: cl.confidence,
          status: 'VERIFIED',
        },
      });

      await db.evidence.create({
        data: {
          claimId: claim.id,
          sourceId: sourcePolity.id,
          locator: cl.locator,
          excerpt: cl.excerpt,
          evidenceType: 'STATUTORY_PROVISION',
          authority: 'PRIMARY_AUTHORITY',
          evidentiarySupport: 'DIRECT_SUPPORT',
          extractionConfidence: 'HIGH',
        },
      });
    }

    // Clear and Recreate ContentBlocks
    await db.contentBlock.deleteMany({ where: { conceptId: concept.id } });
    for (const cb of cDef.contentBlocks) {
      await db.contentBlock.create({
        data: {
          conceptId: concept.id,
          type: cb.type,
          title: cb.title,
          body: cb.body,
          order: cb.order,
          visibility: 'CANONICAL_FULL',
        },
      });
    }

    // Clear and Recreate ExamConceptMappings
    await db.examConceptMapping.deleteMany({ where: { conceptId: concept.id } });
    for (const em of cDef.examMappings) {
      const examId = examMap[em.examCode];
      if (examId) {
        await db.examConceptMapping.create({
          data: {
            examId,
            conceptId: concept.id,
            syllabusUnit: em.syllabusUnit,
            relevance: em.relevance,
            priority: em.priority,
            requiredDepth: em.requiredDepth,
            notes: em.notes,
          },
        });
      }
    }

    // Clear and Recreate RevisionUnits
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

    // Clear and Recreate Questions
    await db.question.deleteMany({ where: { conceptId: concept.id } });
    for (const q of cDef.questions) {
      await db.question.create({
        data: {
          conceptId: concept.id,
          type: q.type,
          stem: q.stem,
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          trapExplanation: q.trapExplanation,
          difficulty: q.difficulty,
          isPYQ: q.isPYQ,
          pyqYear: q.pyqYear,
          pyqPaper: q.pyqPaper,
          pyqQuestionNumber: q.pyqQuestionNumber,
        },
      });
    }
  }

  console.log(`Successfully seeded ${ALL_POLITY_MASTER_CONCEPTS.length} Modernized Indian Polity Canonical Concepts.`);
}
