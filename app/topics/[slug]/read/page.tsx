import React from 'react';
import { notFound } from 'next/navigation';
import { getTopicWithFullConcepts } from '@/lib/knowledge/web-data';
import { TopicContinuousReader } from '@/components/learning/topic-continuous-reader';
import { db } from '@/lib/db/client';

interface TopicReadPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const topics = await db.topic.findMany({
    select: { slug: true },
  });
  return topics.map((t) => ({ slug: t.slug }));
}

export default async function TopicReadPage({ params }: TopicReadPageProps) {
  const { slug } = await params;
  const topic = await getTopicWithFullConcepts(slug);

  if (!topic) {
    notFound();
  }

  return <TopicContinuousReader topic={topic as any} />;
}
