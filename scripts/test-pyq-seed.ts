import { db } from '../lib/db/client';
import { seedPreviousYearQuestionsAndTraps } from '../lib/benchmark/batch-pyqs-and-traps-canonical-seed';

async function main() {
  console.log('--- SEEDING PREVIOUS YEAR QUESTIONS & TRAPS ---');
  await seedPreviousYearQuestionsAndTraps();

  const totalQuestions = await db.question.count();
  const totalPYQs = await db.question.count({ where: { isPYQ: true } });
  console.log('Total Questions in DB:', totalQuestions);
  console.log('Total PYQs in DB:', totalPYQs);
}

main().catch(console.error).finally(() => process.exit(0));
