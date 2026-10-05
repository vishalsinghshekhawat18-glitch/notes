import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'katex/dist/katex.min.css';
import { SiteHeader } from '@/components/navigation/site-header';
import { ServiceWorkerCleaner } from '@/components/navigation/service-worker-cleaner';

const libron = localFont({
  src: [
    {
      path: './fonts/libron/Libron-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/libron/Libron-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/libron/Libron-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/libron/Libron-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-libron',
  display: 'swap',
});

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
    <html lang="en" className={`overflow-x-clip max-w-full w-full ${libron.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('reading_hub_font_size');if(s&&['sm','md','lg','xl'].indexOf(s)!==-1){document.documentElement.setAttribute('data-font-size',s);}else{document.documentElement.setAttribute('data-font-size','md');}var t=localStorage.getItem('reading_hub_theme');if(t&&['parchment','obsidian','ivory'].indexOf(t)!==-1){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','parchment');}}catch(e){}if(typeof window!=='undefined'){window.addEventListener('scroll',function(){if(window.scrollX!==0)window.scrollTo(0,window.scrollY);},{passive:true});}})();`,
          }}
        />
      </head>
      <body className={`${libron.variable} bg-[#FAF9F4] text-[#1B211E] antialiased font-serif min-h-screen flex flex-col selection:bg-[#143227] selection:text-amber-100 overflow-x-clip max-w-full w-full`}>
        <ServiceWorkerCleaner />
        <SiteHeader />
        <main className="flex-1 overflow-x-clip max-w-full w-full">
          {children}
        </main>
        <footer className="py-6 border-t border-[#1E3A2E] bg-[#10251F] px-4 sm:px-6 text-center text-xs text-[#A1B8A9] font-mono shrink-0 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-3 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[#FAF8F3] font-bold font-serif">Mind of Aravalli</span>
              <span className="text-[#2A4D3E]">•</span>
              <span className="text-[#D5DDD6]">Sovereign Knowledge Library</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-[#A1B8A9]">
              <span>5 Academic Domains</span>
              <span className="text-[#2A4D3E]">•</span>
              <span>8 Master Treatises</span>
              <span className="text-[#2A4D3E]">•</span>
              <span>269 Chapters</span>
              <span className="text-[#2A4D3E]">•</span>
              <span className="text-[#C59B4B] font-semibold">Primary Source Grounded</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
