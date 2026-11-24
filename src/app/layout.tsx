import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Career Launchpad — From Zero Knowledge to Your First Career',
  description: 'Structured 30, 60, 90 & 120-day training programs for complete beginners. Free courses, hands-on workplace simulations, portfolio projects, and verified ethical jobs in Kerala and remote.',
  keywords: [
    'online jobs kerala',
    'accounting courses for beginners',
    '30 day job courses',
    'work from home jobs',
    'malayalam career guide',
    'halal online jobs',
    'entry level tech jobs',
    'free learning resources'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Suspense fallback={<div className="h-16 bg-white border-b border-slate-200" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
