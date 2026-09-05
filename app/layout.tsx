import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { SiteHeader } from '@/components/navigation/site-header';
import { ServiceWorkerCleaner } from '@/components/navigation/service-worker-cleaner';

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
      <body className="bg-[#f7f5f0] text-stone-900 antialiased font-sans min-h-screen flex flex-col selection:bg-[#143227] selection:text-amber-100">
        <ServiceWorkerCleaner />
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-[#e5dfd3] bg-[#f2efe7]/80 py-8 text-center text-xs text-stone-600 font-mono">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[#143227] font-bold">▲ Mind of Aravalli</span>
              <span className="text-stone-400">•</span>
              <span>The Ridge Reading Hub</span>
            </div>
            <div className="flex items-center gap-3 text-stone-500">
              <span>One Canonical Knowledge Base</span>
              <span>•</span>
              <span className="text-[#c25e2e] font-semibold">8 Examination Lenses</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
