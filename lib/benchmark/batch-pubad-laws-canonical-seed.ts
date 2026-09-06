import { db } from '../db/client';
import { PUBAD_MASTER_PART1_CONCEPTS } from './batch-pubad-part1';
import { MINOR_LAWS_MASTER_PART2_CONCEPTS } from './batch-minor-laws-part2';

export const ALL_PUBAD_LAWS_CONCEPTS = [
  ...PUBAD_MASTER_PART1_CONCEPTS,
  ...MINOR_LAWS_MASTER_PART2_CONCEPTS,
];

export async function seedPubAdLawsMasterCanonicalKnowledge(): Promise<void> {
  console.log(`Seeding Public Administration & Minor Laws Master Canonical Knowledge (${ALL_PUBAD_LAWS_CONCEPTS.length} concepts)...`);

  // 1. Ensure Domain and Subject exist
  const domain = await db.domain.upsert({
    where: { slug: 'indian-governance-administration' },
    update: {
      name: 'Governance & Public Administration',
      description: 'Public administration, administrative thought, statutory law, constitutional governance, ethics, and service delivery.',
      order: 5,
      status: 'ACTIVE',
    },
    create: {
      slug: 'indian-governance-administration',
      name: 'Governance & Public Administration',
      description: 'Public administration, administrative thought, statutory law, constitutional governance, ethics, and service delivery.',
      order: 5,
      status: 'ACTIVE',
    },
  });

  const subject = await db.subject.upsert({
    where: { slug: 'public-administration-and-laws' },
    update: {
      domainId: domain.id,
      name: 'Public Administration & Minor Laws',
      description: 'Foundational administrative theories, classical and modern thinkers, public policy, bureaucratic models, accountability mechanisms, Rajasthan administrative framework, and minor statutes for RPSC RAS Mains Paper III (Unit 2: 65 Marks & Unit 3: 20 Marks).',
      order: 1,
      status: 'ACTIVE',
    },
    create: {
      domainId: domain.id,
      slug: 'public-administration-and-laws',
      name: 'Public Administration & Minor Laws',
      scopeStatement: 'Comprehensive coverage of Public Administration theories, administrative models, civil services accountability, and statutory welfare/administrative enactments (PWDVA, POSH, POCSO, Senior Citizens, RGPDSA, RRHA, RTI, Lokayukta, NGT, WPA).',
      description: 'Foundational administrative theories, classical and modern thinkers, public policy, bureaucratic models, accountability mechanisms, Rajasthan administrative framework, and minor statutes for RPSC RAS Mains Paper III (Unit 2: 65 Marks & Unit 3: 20 Marks).',
      order: 1,
      status: 'ACTIVE',
    },
  });

  // 2. Ensure Topics exist
  const topicDefs = [
    {
      slug: 'public-administration-foundations-and-thinkers',
      title: 'Public Administration & Management',
      order: 1,
      description: 'Foundational administrative theories, classical and modern thinkers, public policy, bureaucratic models, accountability mechanisms, and Rajasthan administrative framework for RPSC RAS Mains Paper III.',
    },
    {
      slug: 'minor-statutes-and-administrative-laws',
      title: 'Minor Statutes & Administrative Laws',
      order: 2,
      description: 'Exhaustive statutory jurisprudence, institutional frameworks, procedural mandates, judicial doctrines, and penalty matrices of welfare legislations, accountability watchdogs, service delivery guarantees, and environmental tribunals under RPSC RAS Paper III Unit 3 and UPSC.',
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

  // 3. Ensure Canonical Source exists
  const sourcePubad = await db.source.upsert({
    where: { id: 'SRC-PUBAD-LAWS-2026' },
    update: {},
    create: {
      id: 'SRC-PUBAD-LAWS-2026',
      title: 'Public Administration, Management & Statutory Laws Master Corpus (Wilson, Weber, Simon, Riggs, 2nd ARC & Indian Acts)',
      sourceType: 'COMPREHENSIVE_ADMINISTRATIVE_LEGAL_SYNTHESIS',
      authorityTier: 'PEER_REVIEWED_MATHEMATICAL_REFERENCE',
      description: 'Authoritative administrative and statutory jurisprudence corpus for RPSC RAS Mains Paper III and civil services.',
    },
  });

  const examSlugMap: Record<string, string> = {
    RPSC_RAS: 'rpsc-ras',
    UPSC_CSE: 'upsc-cse',
    UPSC_APFC: 'upsc-apfc',
    RBI_GRADE_B: 'rbi-grade-b',
    NABARD_GRADE_A: 'nabard-grade-a',
    SBI_PO: 'sbi-po',
    IBPS_PO: 'ibps-po',
    SEBI_GRADE_A: 'sebi-grade-a',
    IIBF_DBF: 'iibf-dbf',
  };

  // 4. Seed Concepts
  for (const c of ALL_PUBAD_LAWS_CONCEPTS) {
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
          visibility: 'STANDARD',
        },
      });
    }

    // Claims and Evidence
    for (let i = 0; i < c.claims.length; i++) {
      const clm = c.claims[i];
      const claimId = (clm as any).id || `${c.id}-CLM-${i + 1}`;
      const claim = await db.claim.upsert({
        where: { id: claimId },
        update: {
          statement: clm.statement,
          claimType: clm.claimType as any,
          epistemicLevel: clm.epistemicLevel as any,
          confidence: clm.confidence as any,
          status: 'VERIFIED',
          conceptId: concept.id,
        },
        create: {
          id: claimId,
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
          sourceId: sourcePubad.id,
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
          priority: 'HIGH',
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
          options: q.options && q.options.length > 0 ? JSON.stringify(q.options) : null,
          correctAnswer: q.correctAnswer || '',
          explanation: q.explanation,
          trapExplanation: q.trapExplanation || null,
          difficulty: q.difficulty as any,
          isPYQ: q.isPYQ ?? false,
          pyqYear: q.pyqYear ?? null,
          pyqPaper: q.pyqPaper ?? null,
          pyqQuestionNumber: q.pyqQuestionNumber ?? null,
        },
      });
    }
  }

  console.log(`Successfully seeded ${ALL_PUBAD_LAWS_CONCEPTS.length} Public Administration & Minor Laws canonical concepts.`);
}
