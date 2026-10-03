import { db } from '../lib/db/client';

export async function main() {
  console.log('Seeding canonical database for static build...');

  // Clear DB tables in dependency order
  await db.knowledgeAudit.deleteMany();
  await db.question.deleteMany();
  await db.revisionUnit.deleteMany();
  await db.examConceptMapping.deleteMany();
  await db.exam.deleteMany();
  await db.connection.deleteMany();
  await db.contentBlock.deleteMany();
  await db.knowledgeIssue.deleteMany();
  await db.evidence.deleteMany();
  await db.ingestionItem.deleteMany();
  await db.coverageUnit.deleteMany();
  await db.sourceSection.deleteMany();
  await db.source.deleteMany();
  await db.claim.deleteMany();
  await db.concept.deleteMany();
  await db.topic.deleteMany();
  await db.subject.deleteMany();
  await db.domain.deleteMany();

  const count = await db.concept.count();
  console.log(`Shelves 1 to 6 purged. Database reset cleanly. Sovereign Shelf 007 active.`);
  await db.$disconnect();
}

main().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
