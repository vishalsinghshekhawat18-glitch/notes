import fs from 'fs';
import path from 'path';
import { getShelf007Subjects, getShelf007PartGroups } from '../lib/shelf007/service';

interface UnifiedSearchItem {
  id: string;
  type: 'SUBJECT' | 'TOPIC' | 'CONCEPT';
  title: string;
  slug: string;
  url: string;
  description: string;
  hierarchy: {
    domain?: string;
    subject?: string;
    topic?: string;
    concept?: string;
  };
  badge?: string;
}

const subjects = getShelf007Subjects();
const searchItems: UnifiedSearchItem[] = [];

for (const subj of subjects) {
  // 1. Add Subject
  searchItems.push({
    id: `shelf007-subj-${subj.slug}`,
    type: 'SUBJECT',
    title: subj.name,
    slug: subj.slug,
    url: `/shelf-007/${subj.slug}`,
    description: subj.description,
    hierarchy: {
      domain: 'Sovereign Knowledge Bastion (Shelf 007)',
      subject: subj.name,
    },
    badge: `${subj.code} • ${subj.totalChapters} Chapters`,
  });

  // 2. Add Chapters and Sections
  const groups = getShelf007PartGroups(subj.slug);
  for (const group of groups) {
    for (const ch of group.chapters) {
      searchItems.push({
        id: `shelf007-ch-${subj.slug}-${ch.slug}`,
        type: 'TOPIC',
        title: ch.title,
        slug: ch.slug,
        url: `/shelf-007/${subj.slug}/${ch.slug}`,
        description: ch.description,
        hierarchy: {
          domain: 'Sovereign Knowledge Bastion (Shelf 007)',
          subject: subj.name,
          topic: group.groupTitle,
        },
        badge: `${ch.wordCount.toLocaleString()} words • ${ch.readingMinutes} min read`,
      });

      // 3. Add Sections (up to first 5 per chapter to keep index snappy and focused)
      for (const sec of ch.sections.slice(0, 5)) {
        if (sec.title && sec.title !== 'Complete Text' && sec.title !== 'Overview & Epistemic Foundations') {
          searchItems.push({
            id: `shelf007-sec-${subj.slug}-${ch.slug}-${sec.slug}`,
            type: 'CONCEPT',
            title: sec.title,
            slug: sec.slug,
            url: `/shelf-007/${subj.slug}/${ch.slug}`,
            description: sec.body.slice(0, 200).replace(/[*_#`]/g, '').trim(),
            hierarchy: {
              domain: 'Sovereign Knowledge Bastion (Shelf 007)',
              subject: subj.name,
              topic: ch.title,
              concept: sec.title,
            },
            badge: `${sec.wordCount} words`,
          });
        }
      }
    }
  }
}

const fileContent = `export type SearchResultType = 'SUBJECT' | 'TOPIC' | 'CONCEPT';

export interface UnifiedSearchItem {
  id: string;
  type: SearchResultType;
  title: string;
  slug: string;
  url: string;
  description: string;
  hierarchy: {
    domain?: string;
    subject?: string;
    topic?: string;
    concept?: string;
  };
  badge?: string;
}

export interface StaticConceptItem {
  id: string;
  slug: string;
  title: string;
  shortDefinition: string;
  difficulty: string;
  topicTitle: string;
  subjectName: string;
}

export const UNIFIED_SEARCH_INDEX: UnifiedSearchItem[] = ${JSON.stringify(searchItems, null, 2)};
`;

const targetPath = path.join(process.cwd(), 'components', 'navigation', 'static-concept-index.ts');
fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log(`Generated static-concept-index.ts with ${searchItems.length} items (${subjects.length} subjects).`);
