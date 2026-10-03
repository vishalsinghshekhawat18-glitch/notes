import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { SiteHeader } from '@/components/navigation/site-header';
import { ServiceWorkerCleaner } from '@/components/navigation/service-worker-cleaner';

export const metadata: Metadata = {
  title: 'Mind of Aravalli | Reading Hub',
  description: 'Source-grounded canonical knowledge and examination learning system',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('reading_hub_font_size');if(s&&['sm','md','lg','xl'].indexOf(s)!==-1){document.documentElement.setAttribute('data-font-size',s);}else{document.documentElement.setAttribute('data-font-size','md');}var t=localStorage.getItem('reading_hub_theme');if(t&&['parchment','obsidian','ivory'].indexOf(t)!==-1){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','parchment');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-[#f7f5f0] text-stone-900 antialiased font-sans min-h-screen flex flex-col selection:bg-[#143227] selection:text-amber-100 overflow-x-hidden max-w-full">
        <ServiceWorkerCleaner />
        <SiteHeader />
        <main className="flex-1 overflow-x-hidden max-w-full">
          {children}
        </main>
        <footer className="h-8 border-t border-[#e5dfd3] dark:border-[#24332c] bg-[#f2efe7]/90 dark:bg-[#101613]/90 px-4 flex items-center justify-between text-center text-[11px] text-stone-600 dark:text-stone-400 font-mono shrink-0 select-none">
          <div className="max-w-[1620px] mx-auto w-full flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#143227] dark:text-emerald-400 font-bold">▲ Mind of Aravalli</span>
              <span className="text-stone-300 dark:text-stone-600">•</span>
              <span>Shelf 007 Sovereign Knowledge Bastion</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-stone-500 dark:text-stone-400">
              <span>8 Treatises</span>
              <span>•</span>
              <span>232 Chapters</span>
              <span>•</span>
              <span>1,520 MCQs</span>
              <span>•</span>
              <span className="text-[#c25e2e] dark:text-amber-400 font-semibold">Zero Unaccounted-For Source Omission</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
