"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, BookOpen, Globe, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-800/50 bg-background/80">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="relative z-50 flex items-center transition-opacity hover:opacity-80">
          <Image 
            src="/signature.png" 
            alt="Dennis Mende"
            width={220}
            height={220}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <DesktopNav />
        </nav>

        {/* MOBILE BURGER BUTTON */}
        <button 
          className="md:hidden text-text hover:text-primary relative z-50 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`
            fixed inset-0 w-screen h-screen bg-background z-40 
            flex flex-col items-center justify-center space-y-8
            transition-all duration-300 ease-in-out md:hidden
            ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}
        `}
      >
          {/* Decorative Blobs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Mobile Links */}
          <MobileNav onClick={closeMenu} />
      </div>

    </header>
  );
}

// --- DESKTOP NAVIGATION COMPONENT ---
function DesktopNav() {
  return (
    <>
      {/* 1. ABOUT DROPDOWN */}
      <div className="relative group">
        <Link href="/about" className="flex items-center gap-1 hover:text-primary transition-colors py-4">
          About <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        </Link>

        {/* Dropdown Content */}
        <div className="absolute top-full -left-4 w-48 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
          <div className="bg-surface border border-slate-800 rounded-xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
            
            <DropdownItem href="/about" icon={User} label="My Story" />
            <DropdownItem href="/books" icon={BookOpen} label="Library" />
            <DropdownItem href="/travel" icon={Globe} label="Travel Log" />
            
          </div>
        </div>
      </div>

      <Link href="/cv" className="hover:text-primary transition-colors">CV</Link>
      <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
      
      {/* CTA Button Style for Contact */}
      <Link href="/contact" className="px-4 py-2 bg-slate-800 rounded-full text-white hover:bg-primary hover:text-black transition-all">
        Contact
      </Link>
    </>
  );
}

// Helper for Dropdown Items
function DropdownItem({ href, icon: Icon, label }: { href: string, icon: any, label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/50 hover:text-primary transition-colors text-slate-300">
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  );
}


// --- MOBILE NAVIGATION COMPONENT ---
function MobileNav({ onClick }: { onClick: () => void }) {
  const baseClass = "text-3xl font-bold text-heading hover:text-primary transition-colors";
  const subClass = "text-xl font-medium text-slate-400 hover:text-primary transition-colors flex items-center gap-3";

  return (
    <>
      <div className="flex flex-col items-center gap-4 border-b border-slate-800 pb-6 w-64">
        <span className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Personal</span>
        <Link href="/about" onClick={onClick} className={baseClass}>About Me</Link>
        <Link href="/books" onClick={onClick} className={subClass}>
           <BookOpen className="w-5 h-5" /> Library
        </Link>
        <Link href="/travel" onClick={onClick} className={subClass}>
           <Globe className="w-5 h-5" /> Travel
        </Link>
      </div>

      <div className="flex flex-col items-center gap-6 pt-2">
        <Link href="/cv" onClick={onClick} className={baseClass}>CV</Link>
        <Link href="/blog" onClick={onClick} className={baseClass}>Blog</Link>
        <Link href="/contact" onClick={onClick} className={baseClass}>Contact</Link>
      </div>
    </>
  );
}