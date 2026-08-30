import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { SiteHeader } from '@/components/navigation/site-header';

export const metadata: Metadata = {
  title: 'Mind of Aravalli | Reading Hub',
  description: 'Source-grounded canonical knowledge and examination learning system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased font-sans min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-stone-200 py-6 text-center text-xs text-stone-500 font-mono">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Mind of Aravalli — Reading Hub</span>
            <span>One Canonical Knowledge Base • Multi-Exam Lenses</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
