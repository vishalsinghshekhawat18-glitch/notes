import React from 'react';
import Link from 'next/link';
import { getShelf007Subjects } from '@/lib/shelf007/service';

export default function Shelf007IndexPage() {
  const subjects = getShelf007Subjects();

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 font-sans">
      {/* Sovereign Header */}
      <div className="border-b border-[#E0D9CB] pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5A7365]">
          <span>MIND OF ARAVALLI</span>
          <span>•</span>
          <span className="font-bold text-[#10251F]">SHELF 007</span>
          <span>•</span>
          <span className="bg-[#F5F2EB] text-[#10251F] px-2 py-0.5 rounded font-bold border border-[#E0D9CB]">
            SOVEREIGN KNOWLEDGE BASTION
          </span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#10251F] leading-tight tracking-tight">
          Shelf 007: Sovereign Master Examination Series
        </h1>

        <p className="text-sm sm:text-base text-[#2B3B33] max-w-4xl leading-relaxed font-serif">
          Completely isolated, doctoral-depth canonical master treatises. Built from first principles to enforce the
          <strong className="text-[#10251F]"> Golden Test of Total Replacement</strong>: you will never need to open the source books or commercial guides again.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#5A7365]">
          <span className="flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-3 py-1.5 rounded-lg shadow-2xs">
            🛡️ 8 Canonical Treatises
          </span>
          <span className="flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-3 py-1.5 rounded-lg shadow-2xs">
            ⚡ 269 Curricular Chapters
          </span>
          <span className="flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-3 py-1.5 rounded-lg shadow-2xs">
            🎯 6,870 Practice MCQs
          </span>
          <span className="flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E0D9CB] px-3 py-1.5 rounded-lg shadow-2xs text-[#9E722C] font-semibold">
            📜 Primary Sources Grounded
          </span>
        </div>
      </div>

      {/* Sovereign Subject Escarpments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subj) => (
          <article
            key={subj.slug}
            className="bg-[#FFFFFF] border border-[#E0D9CB] hover:border-[#10251F] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10251F]/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded text-[11px] font-bold border bg-[#F5F2EB] text-[#10251F] border-[#E0D9CB]">
                  {subj.code}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border bg-[#FAF9F4] text-[#5A7365] border-[#E0D9CB] truncate max-w-[160px]">
                  {subj.badge}
                </span>
              </div>

              {/* Title & Author */}
              <div>
                <Link href={`/shelf-007/${subj.slug}`} className="block group-hover:text-[#1B4D3C] transition-colors">
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#10251F] leading-snug">
                    {subj.name}
                  </h2>
                </Link>
                <div className="text-xs font-mono text-[#5A7365] pt-1.5 leading-normal">
                  <span className="font-semibold text-[#10251F]">Sources: </span>
                  {subj.authors}
                </div>
              </div>

              {/* Counts Bar */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="bg-[#F5F2EB] text-[#10251F] font-bold px-2.5 py-1 rounded border border-[#E0D9CB]">
                  {subj.totalChapters} Master Units
                </span>
                <span className="bg-[#FAF9F4] text-[#5A7365] px-2.5 py-1 rounded border border-[#E0D9CB]">
                  {subj.slug === 'history' ? 'Curriculum Blueprint' : `~${(subj.totalWords / 1000).toFixed(0)}k Words`}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2B3B33] leading-relaxed font-sans line-clamp-3">
                {subj.description}
              </p>

              {/* Topic Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {subj.chips.slice(0, 4).map((chip, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-[#FAF9F4] border border-[#E0D9CB] text-[#5A7365] px-2 py-0.5 rounded truncate max-w-[180px]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="mt-6 pt-4 border-t border-[#E8E2D5] flex items-center justify-between">
              <Link
                href={`/shelf-007/${subj.slug}`}
                className="text-xs font-mono font-medium text-[#5A7365] hover:text-[#10251F] transition-colors"
              >
                View Syllabus ({subj.totalChapters} Units) →
              </Link>

              <Link
                href={
                  subj.slug === 'iibf-dbf'
                    ? '/shelf-007/iibf-dbf/01_paper_1_ie_ifs-01_module_a_indian_economic_architecture'
                    : `/shelf-007/${subj.slug}/chapter-01`
                }
                className="px-3.5 py-1.5 rounded-lg bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] text-xs font-semibold font-mono transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Treatise</span>
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
