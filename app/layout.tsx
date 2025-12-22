import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Linkedin, Github, Youtube } from "lucide-react"; // Imported icons
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Dennis Mende | Digital Leader & Tech Strategist",
  description: "Senior e-commerce and technology leader specializing in scaling digital businesses.",
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

               {/* GitHub (Add your URL) */}
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