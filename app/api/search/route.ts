import { NextResponse } from 'next/server';
import { searchConcepts } from '@/lib/knowledge/web-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  const results = await searchConcepts(q);

  const formatted = results.map((c) => ({
    id: c.id,
    slug: c.slug,
    title: c.title,
    shortDefinition: c.shortDefinition,
    difficulty: c.difficulty,
    topicTitle: c.topic.title,
    subjectName: c.topic.subject.name,
  }));

  return NextResponse.json(formatted);
}
