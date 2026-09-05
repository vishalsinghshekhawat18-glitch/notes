import { db } from '../lib/db/client';

async function run() {
  const subjects = await db.subject.findMany({
    include: { _count: { select: { topics: true } } },
    orderBy: { order: 'asc' }
  });
  console.log('| Subject Slug | Subject Name | Topics | Concepts | Claims | Questions | Mappings |');
  console.log('| :--- | :--- | ---: | ---: | ---: | ---: | ---: |');
  let sumTopics = 0, sumConcepts = 0, sumClaims = 0, sumQuestions = 0, sumMappings = 0;
  for (const s of subjects) {
    const conceptCount = await db.concept.count({ where: { topic: { subjectId: s.id } } });
    const qCount = await db.question.count({ where: { concept: { topic: { subjectId: s.id } } } });
    const claimCount = await db.claim.count({ where: { concept: { topic: { subjectId: s.id } } } });
    const mapCount = await db.examConceptMapping.count({ where: { concept: { topic: { subjectId: s.id } } } });
    console.log(`| \`${s.slug}\` | ${s.name} | ${s._count.topics} | ${conceptCount} | ${claimCount} | ${qCount} | ${mapCount} |`);
    sumTopics += s._count.topics;
    sumConcepts += conceptCount;
    sumClaims += claimCount;
    sumQuestions += qCount;
    sumMappings += mapCount;
  }
  console.log(`| **TOTAL** | **All 13 Subjects** | **${sumTopics}** | **${sumConcepts}** | **${sumClaims}** | **${sumQuestions}** | **${sumMappings}** |`);
}

run().catch(console.error).finally(() => db.$disconnect());
