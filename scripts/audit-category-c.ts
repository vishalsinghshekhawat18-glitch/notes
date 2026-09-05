import { db } from '../lib/db/client';

async function main() {
  const cSubjects = [
    { slug: 'medieval-indian-history', code: 'C1' },
    { slug: 'modern-indian-history', code: 'C2' },
    { slug: 'art-culture-rajasthan', code: 'C3' },
    { slug: 'world-history', code: 'C4' },
  ];

  console.log('-----------------------------------------------------------------------------------------------------------------');
  console.log('| Subj | Subject Slug             | Topics | Concepts | Blocks | Claims | Evidence | ExamMaps | RevUnits | MCQs |');
  console.log('-----------------------------------------------------------------------------------------------------------------');

  let totTop = 0, totCon = 0, totBlk = 0, totClm = 0, totEvi = 0, totEm = 0, totRu = 0, totQ = 0;

  for (const item of cSubjects) {
    const sub = await db.subject.findUnique({
      where: { slug: item.slug },
      include: {
        topics: {
          include: {
            concepts: {
              include: {
                contentBlocks: true,
                claims: { include: { evidence: true } },
                questions: true,
                examMappings: true,
                revisionUnits: true,
              },
            },
          },
        },
      },
    });

    if (!sub) continue;

    let cCount = 0, bCount = 0, clmCount = 0, eviCount = 0, qCount = 0, emCount = 0, rCount = 0;

    for (const t of sub.topics) {
      cCount += t.concepts.length;
      for (const c of t.concepts) {
        bCount += c.contentBlocks.length;
        clmCount += c.claims.length;
        for (const clm of c.claims) {
          eviCount += clm.evidence.length;
        }
        qCount += c.questions.length;
        emCount += c.examMappings.length;
        rCount += c.revisionUnits.length;
      }
    }

    totTop += sub.topics.length;
    totCon += cCount;
    totBlk += bCount;
    totClm += clmCount;
    totEvi += eviCount;
    totEm += emCount;
    totRu += rCount;
    totQ += qCount;

    console.log(
      '| ' + item.code.padEnd(4) +
      ' | ' + item.slug.padEnd(24) +
      ' | ' + String(sub.topics.length).padStart(6) +
      ' | ' + String(cCount).padStart(8) +
      ' | ' + String(bCount).padStart(6) +
      ' | ' + String(clmCount).padStart(6) +
      ' | ' + String(eviCount).padStart(8) +
      ' | ' + String(emCount).padStart(8) +
      ' | ' + String(rCount).padStart(8) +
      ' | ' + String(qCount).padStart(4) + ' |'
    );
  }

  console.log('-----------------------------------------------------------------------------------------------------------------');
  console.log(
    '| TOT  | Category C Combined      | ' +
    String(totTop).padStart(6) + ' | ' +
    String(totCon).padStart(8) + ' | ' +
    String(totBlk).padStart(6) + ' | ' +
    String(totClm).padStart(6) + ' | ' +
    String(totEvi).padStart(8) + ' | ' +
    String(totEm).padStart(8) + ' | ' +
    String(totRu).padStart(8) + ' | ' +
    String(totQ).padStart(4) + ' |'
  );
  console.log('-----------------------------------------------------------------------------------------------------------------');
}

main().catch(console.error);
