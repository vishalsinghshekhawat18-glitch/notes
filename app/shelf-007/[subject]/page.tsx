import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getShelf007Subjects, getEconomicsChapters, getIibfDbfChapters } from '@/lib/shelf007/service';

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
  const chapters = subject === 'economics' ? getEconomicsChapters() : getIibfDbfChapters();

  // Group chapters by category
  const categories = Array.from(new Set(chapters.map((c) => c.category)));

  const firstReadSlug = chapters.find((c) => !['cover', 'table-of-contents', 'syllabus-blueprint'].includes(c.slug))?.slug || chapters[0].slug;

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

      {/* Subject Header */}
      <div className="bg-[#fcfbf9] border border-[#e5dfd3] rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs border-l-4 border-l-[#143227]">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded font-bold border bg-[#ede8dc] text-[#143227] border-[#d6cebe]">
            {currentSubj.code}
          </span>
          <span className={`px-2.5 py-0.5 rounded font-bold uppercase tracking-wider border ${currentSubj.badgeColor}`}>
            {currentSubj.badge}
          </span>
        </div>

        <div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 leading-snug">
            {currentSubj.name}
          </h1>
          <div className="text-xs sm:text-sm font-mono text-stone-600 pt-1">
            {currentSubj.authors}
          </div>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
          {currentSubj.description}
        </p>

        {/* Stats & Actions */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#f0ebe1]">
          <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
            <span>📚 {chapters.length} Master Units</span>
            <span>•</span>
            <span>📝 ~{(currentSubj.totalWords / 1000).toFixed(0)}k Words</span>
            <span>•</span>
            <span>⏱️ ~{Math.ceil(currentSubj.totalWords / 220)} mins Total Study</span>
          </div>

          <Link
            href={`/shelf-007/${subject}/${firstReadSlug}`}
            className="px-4 py-2 rounded-lg bg-[#143227] hover:bg-[#1f493b] text-white text-xs font-semibold font-mono transition-colors shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>Begin Master Reading</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Chapters / Modules Directory */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#e5dfd3] pb-2">
          <h2 className="font-serif font-bold text-lg text-stone-900">
            Sovereign Curriculum Table of Contents
          </h2>
          <span className="text-xs font-mono text-stone-500">
            {chapters.length} Units Ready
          </span>
        </div>

        <div className="space-y-3">
          {chapters.map((ch, idx) => (
            <article
              key={ch.slug}
              className="bg-white border border-[#e5dfd3] hover:border-[#143227] rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="bg-[#f7f5f0] border border-[#e8e2d5] text-stone-500 px-1.5 py-0.5 rounded text-[10px]">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#143227] font-semibold text-[11px]">
                    {ch.category}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-400 text-[11px]">
                    ~{ch.wordCount.toLocaleString()} words ({ch.readingMinutes} min read)
                  </span>
                </div>

                <Link
                  href={`/shelf-007/${subject}/${ch.slug}`}
                  className="block group-hover:text-[#143227] transition-colors"
                >
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                    {ch.title}
                  </h3>
                </Link>
              </div>

              <Link
                href={`/shelf-007/${subject}/${ch.slug}`}
                className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-lg border border-[#d6cebe] hover:border-[#143227] hover:bg-[#ede8dc] text-stone-700 hover:text-[#143227] text-xs font-mono font-medium transition-colors"
              >
                Read Unit →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
