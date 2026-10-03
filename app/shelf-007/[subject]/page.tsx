import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getShelf007Subjects,
  getShelf007PartGroups,
  getEconomicsChapters,
  getIibfDbfChapters,
  getPoliticalScienceChapters,
  getHistoryChapters,
  getQuantitativeAptitudeChapters,
  getGeneralScienceChapters,
  getGeographyChapters,
  getEnglishLanguageChapters,
} from '@/lib/shelf007/service';
import { Shelf007AcademicTOC } from '@/components/shelf007/shelf007-academic-toc';

interface Shelf007SubjectPageProps {
  params: Promise<{
    subject: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { subject: 'economics' },
    { subject: 'iibf-dbf' },
    { subject: 'political-science' },
    { subject: 'history' },
    { subject: 'quantitative-aptitude' },
    { subject: 'general-science' },
    { subject: 'geography' },
    { subject: 'english-language' },
  ];
}

export default async function Shelf007SubjectPage({ params }: Shelf007SubjectPageProps) {
  const { subject } = await params;

  if (
    subject !== 'economics' &&
    subject !== 'iibf-dbf' &&
    subject !== 'political-science' &&
    subject !== 'history' &&
    subject !== 'quantitative-aptitude' &&
    subject !== 'general-science' &&
    subject !== 'geography' &&
    subject !== 'english-language'
  ) {
    notFound();
  }

  const subjects = getShelf007Subjects();
  const currentSubj = subjects.find((s) => s.slug === subject)!;
  const partGroups = getShelf007PartGroups(
    subject as 'economics' | 'iibf-dbf' | 'political-science' | 'history' | 'quantitative-aptitude' | 'general-science' | 'geography' | 'english-language'
  );
  const chapters =
    subject === 'english-language'
      ? getEnglishLanguageChapters()
      : subject === 'economics'
      ? getEconomicsChapters()
      : subject === 'iibf-dbf'
      ? getIibfDbfChapters()
      : subject === 'political-science'
      ? getPoliticalScienceChapters()
      : subject === 'history'
      ? getHistoryChapters()
      : subject === 'quantitative-aptitude'
      ? getQuantitativeAptitudeChapters()
      : subject === 'general-science'
      ? getGeneralScienceChapters()
      : getGeographyChapters();

  const firstReadSlug =
    chapters.find((c) => !['cover', 'table-of-contents', 'syllabus-blueprint'].includes(c.slug))?.slug ||
    chapters[0]?.slug ||
    '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6 font-sans">
      {/* Archival Parchment Breadcrumb */}
      <nav className="text-xs font-mono text-[#5A7365] flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-[#10251F] transition-colors">
          Catalogue
        </Link>
        <span className="text-[#C5BEAF]">/</span>
        <Link href="/shelf-007" className="hover:text-[#10251F] transition-colors font-medium">
          Shelf 007
        </Link>
        <span className="text-[#C5BEAF]">/</span>
        <span className="text-[#10251F] font-bold">{currentSubj.code}</span>
        <span className="text-[#C5BEAF]">/</span>
        <span className="text-[#2B3B33] font-serif truncate max-w-lg">{currentSubj.name}</span>
      </nav>

      {/* Editorial Academic Table of Contents */}
      <Shelf007AcademicTOC
        subject={currentSubj}
        partGroups={partGroups}
        firstReadSlug={firstReadSlug}
      />
    </div>
  );
}
