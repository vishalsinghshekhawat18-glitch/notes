import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#10251F] text-[#FAF8F3] border border-[#1E3A2E] flex items-center justify-center font-serif text-2xl font-bold mb-6 shadow-sm">
        🏛️
      </div>
      <span className="text-xs font-mono uppercase tracking-widest text-[#9E722C] font-bold">
        Archival Reference 404
      </span>
      <h1 className="font-serif font-bold text-2xl sm:text-4xl text-[#10251F] tracking-tight mt-2 mb-3">
        Codex Shelf Not Found
      </h1>
      <p className="font-serif text-sm sm:text-base text-[#5A7365] max-w-md leading-relaxed mb-8">
        The requested archival pathway or treatise folios could not be located in this sovereign repository.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-[#10251F] hover:bg-[#1B4D3C] text-[#FAF8F3] font-serif font-bold text-xs tracking-wide transition-all shadow-2xs inline-flex items-center gap-2"
        >
          <span>← Return to Sovereign Library Home</span>
        </Link>
        <Link
          href="/shelf-007"
          className="px-4 py-2.5 rounded-xl bg-[#FAF9F4] hover:bg-[#F5F2EB] border border-[#D8CEBC] text-[#10251F] font-semibold transition-colors"
        >
          <span>Browse All 10 Treatises</span>
        </Link>
      </div>
    </div>
  );
}
