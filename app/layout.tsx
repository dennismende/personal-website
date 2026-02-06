import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { Linkedin, Github, Youtube } from "lucide-react";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://dennismende.com'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Dennis Mende | Senior Technology Leader & Strategy Executive",
  description: "Senior Technology Leader uniting commercial strategy with engineering excellence. Proven success leading large-scale organizations (120+ FTEs) and managing multi-million Euro P&Ls.",

  keywords: [
    "Dennis Mende",
    "Senior Technology Leader",
    "VP Engineering",
    "CIO",
    "Digital Strategy",
    "Engineering Excellence",
    "P&L Management",
    "Organizational Transformation"
  ],

  authors: [{ name: 'Dennis Mende' }],
  alternates: {
    canonical: 'https://dennismende.com/',
    types: {
      'application/rss+xml': 'https://dennismende.com/feed.xml',
    },
  },

  openGraph: {
    title: 'Dennis Mende | Senior Technology Leader',
    description: 'Uniting commercial strategy with engineering excellence at scale (120+ FTEs).',
    url: 'https://dennismende.com/',
    siteName: 'Dennis Mende Personal Website',
    images: [
      {
        url: `${baseUrl}/social-profile-banner.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dennis Mende | Senior Technology Leader',
    description: 'Uniting commercial strategy with engineering excellence at scale (120+ FTEs).',
    images: [`${baseUrl}/social-profile-banner.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-text antialiased min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-slate-900 focus:rounded-lg focus:font-bold"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" className="flex-grow pt-32 px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>

        <BackToTop />

        <footer className="py-12 px-6 border-t border-slate-800/50 mt-20">
          <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-sm">

            <span>© {new Date().getFullYear()} Dennis Mende. All rights reserved.</span>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/dennismende"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/dennismende"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}