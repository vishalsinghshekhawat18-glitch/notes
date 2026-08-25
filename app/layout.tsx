import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mind of Aravalli | Reading Hub',
  description: 'Knowledge transformation and examination learning system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
