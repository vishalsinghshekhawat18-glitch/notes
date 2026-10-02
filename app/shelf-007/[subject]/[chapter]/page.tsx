import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getEconomicsChapters,
  getIibfDbfChapters,
  getShelf007ChapterContent,
} from '@/lib/shelf007/service';
import { MarkdownContent } from '@/components/ui/markdown-content';

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

  const { current, content, prev, next, allChapters } = data;
  const subjectName =
    subject === 'economics'
      ? 'Economics Master Treatise'
      : 'IIBF Diploma in Banking & Finance';

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans pb-20">
      {/* Top Sticky Reading Bar */}
      <header className="sticky top-0 z-30 bg-[#ffffff]/90 backdrop-blur-md border-b border-[#e5dfd3] px-4 py-2.5 shadow-2xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Breadcrumbs & Current Title */}
          <div className="flex items-center gap-2 text-xs font-mono overflow-hidden">
            <Link
              href="/shelf-007"
              className="text-stone-500 hover:text-[#143227] transition-colors shrink-0"
            >
              Shelf 007
            </Link>
            <span className="text-stone-300">/</span>
            <Link
              href={`/shelf-007/${subject}`}
              className="text-stone-500 hover:text-[#143227] transition-colors truncate hidden sm:inline"
            >
              {subjectName}
            </Link>
            <span className="text-stone-300 hidden sm:inline">/</span>
            <span className="text-[#143227] font-bold truncate">
              {current.category}
            </span>
          </div>

          {/* Right: Quick Chapter Switcher & Index */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/shelf-007/${subject}`}
              className="text-xs font-mono px-2.5 py-1 rounded border border-[#d6cebe] hover:border-[#143227] text-stone-700 hover:text-[#143227] transition-colors bg-[#f7f5f0]"
            >
              TOC Map 📋
            </Link>

            {prev && (
              <Link
                href={`/shelf-007/${subject}/${prev.slug}`}
                title={`Previous: ${prev.title}`}
                className="text-xs font-mono px-2.5 py-1 rounded border border-[#d6cebe] hover:border-[#143227] text-stone-700 hover:text-[#143227] transition-colors bg-[#f7f5f0]"
              >
                ← Prev
              </Link>
            )}

            {next && (
              <Link
                href={`/shelf-007/${subject}/${next.slug}`}
                title={`Next: ${next.title}`}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#143227] hover:bg-[#1f493b] text-white font-semibold transition-colors shadow-2xs"
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main Reading Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-8">
        {/* Unit Meta Header */}
        <div className="border-b border-[#e5dfd3] pb-4 space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500">
            <span className="bg-[#ede8dc] text-[#143227] px-2 py-0.5 rounded font-bold border border-[#d6cebe]">
              Unit {current.order} of {allChapters.length}
            </span>
            <span>•</span>
            <span className="font-semibold text-stone-700">{current.category}</span>
            <span>•</span>
            <span>~{current.wordCount.toLocaleString()} words</span>
            <span>•</span>
            <span>⏱️ {current.readingMinutes} min read</span>
          </div>

          <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-tight">
            {current.title}
          </h1>
        </div>

        {/* Rendered Markdown Body */}
        <article className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:leading-relaxed prose-pre:bg-[#1f1e1d] prose-pre:text-stone-100 prose-table:text-xs sm:prose-table:text-sm">
          <MarkdownContent content={content} />
        </article>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-[#e5dfd3] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          {prev ? (
            <Link
              href={`/shelf-007/${subject}/${prev.slug}`}
              className="w-full sm:w-auto p-3 rounded-xl border border-[#d6cebe] hover:border-[#143227] bg-white hover:bg-[#ede8dc]/50 transition-all text-left space-y-1 shadow-2xs"
            >
              <div className="text-[10px] text-stone-400 uppercase tracking-wider">← Previous Unit</div>
              <div className="font-serif font-bold text-sm text-stone-900 line-clamp-1">{prev.title}</div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            href={`/shelf-007/${subject}`}
            className="px-4 py-2 rounded-lg bg-[#f7f5f0] border border-[#d6cebe] hover:border-[#143227] text-stone-700 hover:text-[#143227] text-xs font-semibold text-center transition-colors"
          >
            All Units ({allChapters.length})
          </Link>

          {next ? (
            <Link
              href={`/shelf-007/${subject}/${next.slug}`}
              className="w-full sm:w-auto p-3 rounded-xl border border-[#143227] bg-[#143227] text-white hover:bg-[#1f493b] transition-all text-right space-y-1 shadow-2xs"
            >
              <div className="text-[10px] text-stone-300 uppercase tracking-wider">Next Unit →</div>
              <div className="font-serif font-bold text-sm text-white line-clamp-1">{next.title}</div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </main>
    </div>
  );
}
