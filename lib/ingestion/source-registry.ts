import { db } from '../db/client';
import { AuthorityTier, AuthorityTierType } from '../types';

export const SupportedSourceTypes = {
  LEGISLATION: 'LEGISLATION',
  CONSTITUTION: 'CONSTITUTION',
  JUDGMENT: 'JUDGMENT',
  OFFICIAL_DOCUMENT: 'OFFICIAL_DOCUMENT',
  BOOK: 'BOOK',
  TEXTBOOK: 'TEXTBOOK',
  ARTICLE: 'ARTICLE',
  LECTURE_VIDEO: 'LECTURE_VIDEO',
  WEBPAGE: 'WEBPAGE',
  DATASET: 'DATASET',
} as const;

export type SupportedSourceType = (typeof SupportedSourceTypes)[keyof typeof SupportedSourceTypes];

export interface RegisterSourcePayload {
  title: string;
  sourceType: SupportedSourceType | string;
  authorityTier: AuthorityTierType | string;
  author?: string;
  publisher?: string;
  publicationDate?: Date;
  edition?: string;
  identifier?: string;
  url?: string;
  language?: string;
  description?: string;
}

/**
 * Registers an authoritative source with explicit authority tiering and metadata.
 */
export async function registerSource(payload: RegisterSourcePayload) {
  if (!payload.title || payload.title.trim() === '') {
    throw new Error('Source title is required.');
  }

  return db.source.create({
    data: {
      title: payload.title.trim(),
      sourceType: payload.sourceType,
      authorityTier: payload.authorityTier,
      author: payload.author?.trim(),
      publisher: payload.publisher?.trim(),
      publicationDate: payload.publicationDate,
      edition: payload.edition?.trim(),
      identifier: payload.identifier?.trim(),
      url: payload.url?.trim(),
      language: payload.language || 'en',
      description: payload.description?.trim(),
    },
  });
}

export async function getSourceById(id: string) {
  return db.source.findUnique({
    where: { id },
    include: {
      sections: {
        orderBy: { order: 'asc' },
      },
      coverageUnits: {
        orderBy: { order: 'asc' },
      },
    },
  });
}

export async function addSourceSection(payload: {
  sourceId: string;
  parentId?: string | null;
  title: string;
  sectionType: string;
  locator?: string;
  pageStart?: number;
  pageEnd?: number;
  order?: number;
}) {
  return db.sourceSection.create({
    data: payload,
  });
}

