import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getShelf007Subjects,
  getShelf007PartGroups,
  getEconomicsChapters,
  getIibfDbfChapters,
} from '@/lib/shelf007/service';
import { Shelf007AcademicTOC } from '@/components/shelf007/shelf007-academic-toc';

interface Shelf007SubjectPageProps {
  params: Promise<{
    subject: string;
  }>;
}

export async function generateStaticParams() {
  return [{ subject: 'economics' }, { subject: 'iibf-dbf' }];
}

export default async function Shelf007SubjectPage({ params }: Shelf007SubjectPageProps) {
  const { subject } = await params;

  if (subject !== 'economics' && subject !== 'iibf-dbf') {
    notFound();
  }

  const subjects = getShelf007Subjects();
  const currentSubj = subjects.find((s) => s.slug === subject)!;
  const partGroups = getShelf007PartGroups(subject);
  const chapters = subject === 'economics' ? getEconomicsChapters() : getIibfDbfChapters();

  const firstReadSlug =
    chapters.find((c) => !['cover', 'table-of-contents', 'syllabus-blueprint'].includes(c.slug))?.slug ||
    chapters[0]?.slug ||
    '';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10 space-y-8 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-stone-900 transition-colors">
          Library
        </Link>
        <span>›</span>
        <Link href="/shelf-007" className="hover:text-stone-900 transition-colors font-semibold text-[#143227]">
          Shelf 007 (Sovereign Bastion)
        </Link>
        <span>›</span>
        <span className="text-stone-800 font-semibold">{currentSubj.name}</span>
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
