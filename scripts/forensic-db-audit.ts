import { db } from '../lib/db/client';

async function main() {
  const subjects = await db.subject.findMany({
    include: {
      topics: {
        include: {
          concepts: {
            include: {
              _count: {
                select: {
                  claims: true,
                  contentBlocks: true,
                  examMappings: true,
                  revisionUnits: true,
                  questions: true
                }
              }
            }
          }
        }
      }
    },
    orderBy: { order: 'asc' }
  });

  console.log('| Subject Slug | Subject Name | Topics | Concepts | Claims | Blocks | Mappings | RevUnits | Questions |');
  console.log('| :--- | :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');

  let grandTopics = 0, grandConcepts = 0, grandClaims = 0, grandBlocks = 0, grandMappings = 0, grandRev = 0, grandQ = 0;

  for (const s of subjects) {
    let subConcepts = 0, subClaims = 0, subBlocks = 0, subMappings = 0, subRev = 0, subQ = 0;
    for (const t of s.topics) {
      for (const c of t.concepts) {
        subConcepts++;
        subClaims += c._count.claims;
        subBlocks += c._count.contentBlocks;
        subMappings += c._count.examMappings;
        subRev += c._count.revisionUnits;
        subQ += c._count.questions;
      }
    }
    console.log(`| \`${s.slug}\` | ${s.name} | ${s.topics.length} | ${subConcepts} | ${subClaims} | ${subBlocks} | ${subMappings} | ${subRev} | ${subQ} |`);
    grandTopics += s.topics.length;
    grandConcepts += subConcepts;
    grandClaims += subClaims;
    grandBlocks += subBlocks;
    grandMappings += subMappings;
    grandRev += subRev;
    grandQ += subQ;
  }
  console.log(`| **TOTAL** | **${subjects.length} Subjects** | **${grandTopics}** | **${grandConcepts}** | **${grandClaims}** | **${grandBlocks}** | **${grandMappings}** | **${grandRev}** | **${grandQ}** |`);

  const [cCount, clmCount, bCount, mCount, rCount, qCount, pyqCount] = await Promise.all([
    db.concept.count(),
    db.claim.count(),
    db.contentBlock.count(),
    db.examConceptMapping.count(),
    db.revisionUnit.count(),
    db.question.count(),
    db.question.count({ where: { isPYQ: true } })
  ]);
  console.log('\nGlobal direct DB counts:');
  console.log(JSON.stringify({ cCount, clmCount, bCount, mCount, rCount, qCount, pyqCount }, null, 2));
}

main().catch(console.error).finally(() => process.exit(0));
