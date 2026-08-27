import { db } from '../lib/db/client';
import * as fs from 'fs';
import * as path from 'path';

async function updateStaticIndex() {
  const concepts = await db.concept.findMany({
    where: {
      status: { in: ['ACTIVE', 'CANONICAL'] },
    },
    orderBy: [{ topic: { order: 'asc' } }, { id: 'asc' }],
    include: {
      topic: {
        include: {
          subject: true,
        },
      },
    },
  });

  console.log(`Found ${concepts.length} active canonical concepts.`);

  const staticItems = concepts.map((c) => ({
    id: c.id,
    slug: c.slug,
    title: c.title,
    shortDefinition: c.shortDefinition,
    difficulty: c.difficulty,
    topicTitle: c.topic.title,
    subjectName: c.topic.subject.name,
  }));

  const fileContent = `export interface StaticConceptItem {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  topicTitle: string;
  subjectName: string;
}

export const STATIC_CONCEPT_INDEX: StaticConceptItem[] = ${JSON.stringify(staticItems, null, 2)};
`;

  const targetPath = path.join(process.cwd(), 'components', 'navigation', 'static-concept-index.ts');
  fs.writeFileSync(targetPath, fileContent, 'utf-8');
  console.log(`Updated ${targetPath} with ${staticItems.length} concepts.`);
  await db.$disconnect();
}

updateStaticIndex().catch((err) => {
  console.error('Error updating static index:', err);
  process.exit(1);
});
