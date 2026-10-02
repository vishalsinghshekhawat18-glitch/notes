import React from 'react';
import Link from 'next/link';
import { getShelf007Subjects } from '@/lib/shelf007/service';

export default function Shelf007IndexPage() {
  const subjects = getShelf007Subjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-10 font-sans">
      {/* Sovereign Header */}
      <div className="border-b border-[#e5dfd3] pb-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#143227]">
          <span>▲ ARAVALLI RIDGE</span>
          <span>•</span>
          <span className="font-bold">SHELF 007</span>
          <span>•</span>
          <span className="bg-[#ede8dc] text-[#143227] px-2 py-0.5 rounded font-bold border border-[#d6cebe]">
            SOVEREIGN KNOWLEDGE BASTION
          </span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
          Shelf 007: Sovereign Master Examination Series
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          Completely isolated, doctoral-depth canonical master treatises. Built from first principles to enforce the
          <strong> Golden Test of Total Replacement</strong>: you will never need to open the source books or commercial guides again.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500">
          <span className="flex items-center gap-1.5 bg-[#fbf9f5] border border-[#e8e2d5] px-2.5 py-1 rounded">
            🛡️ 100% Isolated from Shelf 2
          </span>
          <span className="flex items-center gap-1.5 bg-[#fbf9f5] border border-[#e8e2d5] px-2.5 py-1 rounded">
            ⚡ Direct Markdown Engine
          </span>
          <span className="flex items-center gap-1.5 bg-[#fbf9f5] border border-[#e8e2d5] px-2.5 py-1 rounded">
            🎯 Zero Database Bloat / Zero Duplicate Errors
          </span>
        </div>
      </div>

      {/* Sovereign Subject Escarpments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subj) => (
          <article
            key={subj.slug}
            className="bg-white border-2 border-[#d6cebe] hover:border-[#143227] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between border-l-4 border-l-[#143227] group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#143227]/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded text-[11px] font-bold border bg-[#ede8dc] text-[#143227] border-[#d6cebe]">
                  {subj.code}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${subj.badgeColor}`}>
                  {subj.badge}
                </span>
              </div>

              {/* Title & Author */}
              <div>
                <Link href={`/shelf-007/${subj.slug}`} className="block group-hover:text-[#143227] transition-colors">
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 leading-snug">
                    {subj.name}
                  </h2>
                </Link>
                <div className="text-xs font-mono text-stone-500 pt-1">
                  {subj.authors}
                </div>
              </div>

              {/* Counts Bar */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="bg-[#ede8dc] text-[#143227] font-bold px-2 py-0.5 rounded border border-[#d6cebe]">
                  {subj.totalChapters} Master Units
                </span>
                <span className="bg-[#f5f2eb] text-stone-600 px-2 py-0.5 rounded border border-[#e5dfd3]">
                  ~{(subj.totalWords / 1000).toFixed(0)}k Words
                </span>
                <span className="bg-[#eef6f2] text-[#143227] px-2 py-0.5 rounded border border-[#cbe4d7]">
                  Publication Grade
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {subj.description}
              </p>

              {/* Topic Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {subj.chips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-sans bg-[#f7f5f0] border border-[#e8e2d5] text-stone-700 px-2 py-0.5 rounded"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="mt-6 pt-4 border-t border-[#f0ebe1] flex items-center justify-between">
              <Link
                href={`/shelf-007/${subj.slug}`}
                className="text-xs font-mono font-medium text-stone-600 hover:text-[#143227] transition-colors"
              >
                View Master Syllabus ({subj.totalChapters} Units) →
              </Link>

              <Link
                href={
                  subj.slug === 'iibf-dbf'
                    ? '/shelf-007/iibf-dbf/01_paper_1_ie_ifs-01_module_a_indian_economic_architecture'
                    : `/shelf-007/${subj.slug}/chapter-01`
                }
                className="px-3.5 py-1.5 rounded-lg bg-[#143227] hover:bg-[#1f493b] text-white text-xs font-semibold font-mono transition-colors shadow-2xs inline-flex items-center gap-1.5"
              >
                <span>Read Master Treatise</span>
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
