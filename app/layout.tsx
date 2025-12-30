import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Linkedin, Github, Youtube } from "lucide-react";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://dennismende.com' 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Dennis Mende | Account Management Partner & Digital Leader",
  description: "Executive leader at Diconium with a track record in commercial strategy, P&L management, and engineering excellence.",
  keywords: ["Dennis Mende, Digital Leadership, Account Management Partner, Engineering Excellence, Commercial Strategy, Software Architecture, P&L Management"],
  authors: [{ name: 'Dennis Mende' }],
  alternates: {
    canonical: 'https://dennismende.com/',
  },
  openGraph: {
    title: 'Dennis Mende | Digital Leader',
    description: 'Uniting commercial strategy with engineering excellence.',
    url: 'https://dennismende.com/',
    siteName: 'Dennis Mende Personal Website',
    images: [
      {
        url: `${baseUrl}/profile.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dennis Mende | Digital Leader',
    description: 'Uniting commercial strategy with engineering excellence.',
    images: [`${baseUrl}/profile.png`],
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
        {/* Full Width Header */}
        <Navbar />

        {/* Full Width Main Content */}
        <main className="flex-grow pt-32 px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>

        {/* Footer Section */}
        <footer className="py-12 px-6 border-t border-slate-800/50 mt-20">
          <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-sm">
            
            <span>© {new Date().getFullYear()} Dennis Mende. All rights reserved.</span>
            
            <div className="flex items-center gap-6">
               {/* LinkedIn */}
               <a 
                 href="https://www.linkedin.com/in/dennismende" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-primary hover:scale-110 transition-all duration-300"
                 aria-label="LinkedIn"
               >
                 <Linkedin className="w-5 h-5" />
               </a>

               {/* GitHub */}
               <a 
                 href="https://github.com/dennismende" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-primary hover:scale-110 transition-all duration-300"
                 aria-label="GitHub"
               >
                 <Github className="w-5 h-5" />
               </a>

               {/* YouTube 
               <a 
                 href="https://youtube.com/@YOUR_YOUTUBE_HANDLE" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-primary hover:scale-110 transition-all duration-300"
                 aria-label="YouTube"
               >
                 <Youtube className="w-5 h-5" />
               </a>
               */}
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}