import React from 'react';
import { notFound } from 'next/navigation';
import {
  getEconomicsChapters,
  getIibfDbfChapters,
  getPoliticalScienceChapters,
  getHistoryChapters,
  getQuantitativeAptitudeChapters,
  getGeneralScienceChapters,
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
  const ps = getPoliticalScienceChapters().map((c) => ({
    subject: 'political-science',
    chapter: c.slug,
  }));
  const hist = getHistoryChapters().map((c) => ({
    subject: 'history',
    chapter: c.slug,
  }));
  const quant = getQuantitativeAptitudeChapters().map((c) => ({
    subject: 'quantitative-aptitude',
    chapter: c.slug,
  }));
  const sci = getGeneralScienceChapters().map((c) => ({
    subject: 'general-science',
    chapter: c.slug,
  }));
  return [...econ, ...dbf, ...ps, ...hist, ...quant, ...sci];
}

export default async function Shelf007ChapterPage({ params }: Shelf007ChapterPageProps) {
  const { subject, chapter } = await params;

  if (
    subject !== 'economics' &&
    subject !== 'iibf-dbf' &&
    subject !== 'political-science' &&
    subject !== 'history' &&
    subject !== 'quantitative-aptitude' &&
    subject !== 'general-science'
  ) {
    notFound();
  }

  const data = getShelf007ChapterContent(
    subject as 'economics' | 'iibf-dbf' | 'political-science' | 'history' | 'quantitative-aptitude' | 'general-science',
    chapter
  );
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
