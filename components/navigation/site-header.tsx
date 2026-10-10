'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoIcon from '@/app/icon.png';
import { SearchDialog } from './search-dialog';
import { ThemeSwitcher } from './theme-switcher';

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Library', href: '/' },
    { label: 'Subjects', href: '/shelf-007' },
  ];

  return (
    <>
      <header id="site-header" className="sticky top-0 z-30 bg-[#10251F] text-[#FAF8F3] backdrop-blur-md border-b border-[#1E3A2E] shadow-sm max-w-full overflow-x-clip">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-2 w-full min-w-0">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <Link href="/" className="flex items-center gap-2.5 group min-w-0 shrink-0">
              <div className="w-8 h-8 rounded-md bg-[#173A2F] border border-[#274E3E] flex items-center justify-center p-1 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src={logoIcon}
                  alt="Mind of Aravalli Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain drop-shadow-2xs"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-[#FAF8F3] tracking-tight text-sm sm:text-base leading-tight group-hover:text-[#C59B4B] transition-colors truncate max-w-[150px] sm:max-w-none">
                  Mind of Aravalli
                </span>
                <span className="hidden sm:inline text-[10px] font-mono text-[#A1B8A9] uppercase tracking-wider truncate">
                  Sovereign Knowledge Library
                </span>
              </div>
            </Link>

            {/* Desktop Scholarly Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-xs font-serif text-[#D5DDD6] min-w-0">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#FAF8F3] font-medium transition-colors shrink-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Centered Boxed Tag: Current Affairs */}
          <div className="hidden sm:flex items-center justify-center absolute left-1/2 -translate-x-1/2 pointer-events-auto">
            <Link
              href="/shelf-007/current-affairs"
              className="px-3.5 py-1 rounded-md border border-[#2A4D3E] bg-[#143227]/90 hover:bg-[#1A3E31] hover:border-[#C59B4B] text-[#FAF8F3] hover:text-[#C59B4B] text-xs font-serif font-medium tracking-wide transition-all shadow-2xs inline-flex items-center gap-2 group cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4B] group-hover:scale-125 transition-transform" />
              <span>Current Affairs</span>
            </Link>
          </div>

          {/* Search Trigger, Ambience Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-xs text-[#FAF8F3] bg-[#16352A] hover:bg-[#1D4436] border border-[#234A3C] rounded-lg p-2 sm:px-3 sm:py-1.5 transition-all shadow-2xs cursor-pointer font-mono"
              title="Search across all monographs, statutory doctrines and questions (⌘K)"
            >
              <svg className="w-3.5 h-3.5 text-[#A1B8A9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden md:inline text-[11px] text-[#D5DDD6]">Search library...</span>
              <kbd className="hidden lg:inline-block font-mono text-[9px] bg-[#10251F] text-[#C59B4B] px-1.5 py-0.5 rounded border border-[#234A3C]">
                ⌘K
              </kbd>
            </button>

            <ThemeSwitcher />

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border border-[#234A3C] text-[#FAF8F3] hover:bg-[#16352A] transition-colors"
              aria-label="Toggle navigation drawer"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-[#1E3A2E] bg-[#10251F] px-4 py-3 space-y-1 font-serif text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg text-[#FAF8F3] hover:bg-[#16352A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-1">
              <Link
                href="/shelf-007/current-affairs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 py-2 px-3 rounded-md border border-[#2A4D3E] bg-[#143227] text-[#FAF8F3] hover:text-[#C59B4B] hover:border-[#C59B4B] transition-colors w-full font-serif text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4B]" />
                <span>Current Affairs</span>
              </Link>
            </div>
          </nav>
        )}
      </header>

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
