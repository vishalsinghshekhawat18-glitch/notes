import React from 'react';
import { notFound } from 'next/navigation';
import {
  getEconomicsChapters,
  getIibfDbfChapters,
  getShelf007ChapterContent,
} from '@/lib/shelf007/service';
import { Shelf007ContinuousReader } from '@/components/shelf007/shelf007-continuous-reader';

interface Shelf007ChapterPageProps {
  params: Promise<{
    subject: string;
    chapter: string;
  }>;
}

export async function generateStaticParams() {
  const econ = getEconomicsChapters().map((c) => ({
    subject: 'economics',
    chapter: c.slug,
  }));
  const dbf = getIibfDbfChapters().map((c) => ({
    subject: 'iibf-dbf',
    chapter: c.slug,
  }));
  return [...econ, ...dbf];
}

export default async function Shelf007ChapterPage({ params }: Shelf007ChapterPageProps) {
  const { subject, chapter } = await params;

  if (subject !== 'economics' && subject !== 'iibf-dbf') {
    notFound();
  }

  const data = getShelf007ChapterContent(subject, chapter);
  if (!data) {
    notFound();
  }

  const { current, prev, next, allChapters } = data;

  return (
    <Shelf007ContinuousReader
      subject={subject}
      currentChapter={current}
      prevChapter={prev}
      nextChapter={next}
      allChapters={allChapters}
    />
  );
}
