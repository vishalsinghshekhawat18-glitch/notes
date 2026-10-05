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

export const dynamicParams = false;

export async function generateStaticParams() {
  const topics = await db.topic.findMany({
    select: { slug: true },
  });
  if (topics.length === 0) {
    return [{ slug: '_empty' }];
  }
  return topics.map((t) => ({ slug: t.slug }));
}

export default async function TopicReadPage({ params }: TopicReadPageProps) {
  const { slug } = await params;
  if (slug === '_empty') {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center text-stone-500 font-mono text-sm">
        No topics configured in active database.
      </div>
    );
  }
  const topic = await getTopicWithFullConcepts(slug);

  if (!topic) {
    notFound();
  }

  return <TopicContinuousReader topic={topic as any} />;
}
