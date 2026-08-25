import { db } from '../db/client';

export interface CreateDomainInput {
  slug: string;
  name: string;
  description?: string;
  order?: number;
}

export interface CreateSubjectInput {
  domainId: string;
  slug: string;
  name: string;
  description?: string;
  scopeStatement: string;
  order?: number;
}

export async function getDomains() {
  return db.domain.findMany({
    orderBy: { order: 'asc' },
    include: {
      subjects: {
        orderBy: { order: 'asc' },
        select: {
          id: true,
          slug: true,
          name: true,
          description: true,
          status: true,
          _count: {
            select: { topics: true },
          },
        },
      },
    },
  });
}

export async function getDomainBySlug(slug: string) {
  return db.domain.findUnique({
    where: { slug },
    include: {
      subjects: {
        orderBy: { order: 'asc' },
      },
    },
  });
}

export async function getSubjectBySlug(slug: string) {
  return db.subject.findUnique({
    where: { slug },
    include: {
      domain: true,
      topics: {
        orderBy: { order: 'asc' },
        include: {
          concepts: {
            where: { parentId: null }, // Top-level concepts or clusters
            orderBy: { order: 'asc' },
            include: {
              children: {
                orderBy: { order: 'asc' },
              },
            },
          },
        },
      },
    },
  });
}

export async function createDomain(input: CreateDomainInput) {
  return db.domain.create({
    data: input,
  });
}

export async function createSubject(input: CreateSubjectInput) {
  return db.subject.create({
    data: input,
  });
}
