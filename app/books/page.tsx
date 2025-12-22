"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Star, BookOpen, Clock, CheckCircle2 } from "lucide-react";

// --- 1. MOCK DATA (Replace with real data or Sanity fetch later) ---
const library = [
  {
    "id": 1,
    "title": "Team Topologies",
    "author": "Matthew Skelton & Manuel Pais",
    "category": "Leadership",
    "status": "Read",
    "rating": 5,
    "cover": "/books/team-topologies.jpg"
  },
  {
    "id": 2,
    "title": "High Output Management",
    "author": "Andrew Grove",
    "category": "Leadership",
    "status": "Read",
    "rating": 5,
    "cover": "/books/high-output-management.jpg"
  },
  {
    "id": 4,
    "title": "Atomic Habits",
    "author": "James Clear",
    "category": "Productivity",
    "status": "Read",
    "rating": 5,
    "cover": "/books/atomic-habits.jpg"
  },
  {
    "id": 5,
    "title": "Designing Data-Intensive Applications",
    "author": "Martin Kleppmann",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/designing-data-intensive-applications.jpg"
  },
  {
    "id": 6,
    "title": "Measure What Matters",
    "author": "John Doerr",
    "category": "Strategy",
    "status": "Read",
    "rating": 4,
    "cover": "/books/measure-what-matters.jpg"
  },
  {
    "id": 7,
    "title": "Mastering Uncertainty",
    "author": "Matt Watkinson & Csaba Konkoly",
    "category": "Strategy",
    "status": "Read",
    "rating": 4,
    "cover": "/books/mastering-uncertainty.jpg"
  },
  {
    "id": 8,
    "title": "Winning in the Platform Economy",
    "author": "Alexander Graf & Holger Schneider",
    "category": "Strategy",
    "status": "Read",
    "rating": 4,
    "cover": "/books/winning-in-the-platform-economy.jpg"
  },
  {
    "id": 9,
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "category": "Finance",
    "status": "Read",
    "rating": 4,
    "cover": "/books/rich-dad-poor-dad.jpg"
  },
  {
    "id": 10,
    "title": "Sell It Like Serhant",
    "author": "Ryan Serhant",
    "category": "Business",
    "status": "Read",
    "rating": 4,
    "cover": "/books/sell-it-like-serhant.jpg"
  },
  {
    "id": 11,
    "title": "Silicon Valley Investing",
    "author": "Thomas Rappold",
    "category": "Finance",
    "status": "Read",
    "rating": 3,
    "cover": "/books/silicon-valley-investing.jpg"
  },
  {
    "id": 12,
    "title": "Freakonomics",
    "author": "Steven D. Levitt",
    "category": "Economics",
    "status": "Read",
    "rating": 4,
    "cover": "/books/freakonomics.jpg"
  },
  {
    "id": 13,
    "title": "Das einzige Buch über Finanzen",
    "author": "Thomas Kehl",
    "category": "Finance",
    "status": "Read",
    "rating": 4,
    "cover": "/books/das-einzige-buch-ber-finanzen.jpg"
  },
  {
    "id": 14,
    "title": "Leaders Eat Last",
    "author": "Simon Sinek",
    "category": "Leadership",
    "status": "Read",
    "rating": 5,
    "cover": "/books/leaders-eat-last.jpg"
  },
  {
    "id": 15,
    "title": "The Five Dysfunctions of a Team",
    "author": "Patrick Lencioni",
    "category": "Leadership",
    "status": "Read",
    "rating": 5,
    "cover": "/books/the-five-dysfunctions-of-a-team.jpg"
  },
  {
    "id": 16,
    "title": "Surrounded by Idiots",
    "author": "Thomas Erikson",
    "category": "Psychology",
    "status": "Read",
    "rating": 3,
    "cover": "/books/surrounded-by-idiots.jpg"
  },
  {
    "id": 17,
    "title": "Crushing It!",
    "author": "Gary Vaynerchuk",
    "category": "Business",
    "status": "Read",
    "rating": 4,
    "cover": "/books/crushing-it.jpg"
  },
  {
    "id": 18,
    "title": "Management - Von den Besten lernen",
    "author": "Frank Arnold",
    "category": "Leadership",
    "status": "Read",
    "rating": 4,
    "cover": "/books/management-von-den-besten-lernen.jpg"
  },
  {
    "id": 19,
    "title": "Turn the Ship Around!",
    "author": "L. David Marquet",
    "category": "Leadership",
    "status": "Read",
    "rating": 5,
    "cover": "/books/turn-the-ship-around.jpg"
  },
  {
    "id": 20,
    "title": "The Manager's Path",
    "author": "Camille Fournier",
    "category": "Leadership",
    "status": "Read",
    "rating": 5,
    "cover": "/books/the-manager-s-path.jpg"
  },
  {
    "id": 21,
    "title": "Start With Why",
    "author": "Simon Sinek",
    "category": "Leadership",
    "status": "Read",
    "rating": 5,
    "cover": "/books/start-with-why.jpg"
  },
  {
    "id": 22,
    "title": "Getting Things Done",
    "author": "David Allen",
    "category": "Productivity",
    "status": "Read",
    "rating": 4,
    "cover": "/books/getting-things-done.jpg"
  },
  {
    "id": 23,
    "title": "Think Again",
    "author": "Adam Grant",
    "category": "Psychology",
    "status": "Read",
    "rating": 4,
    "cover": "/books/think-again.jpg"
  },
  {
    "id": 24,
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey",
    "category": "Productivity",
    "status": "Read",
    "rating": 5,
    "cover": "/books/the-7-habits-of-highly-effective-people.jpg"
  },
  {
    "id": 25,
    "title": "Principles",
    "author": "Ray Dalio",
    "category": "Strategy",
    "status": "Read",
    "rating": 5,
    "cover": "/books/principles.jpg"
  },
  {
    "id": 26,
    "title": "No Rules Rules",
    "author": "Reed Hastings",
    "category": "Business",
    "status": "Read",
    "rating": 4,
    "cover": "/books/no-rules-rules.jpg"
  },
  {
    "id": 27,
    "title": "Wenn jeder dich mag...",
    "author": "Martin Wehrle",
    "category": "Psychology",
    "status": "Read",
    "rating": 4,
    "cover": "/books/wenn-jeder-dich-mag.jpg"
  },
  {
    "id": 28,
    "title": "The Lean Startup",
    "author": "Eric Ries",
    "category": "Business",
    "status": "Read",
    "rating": 5,
    "cover": "/books/the-lean-startup.jpg"
  },
  {
    "id": 29,
    "title": "High Performance Habits",
    "author": "Brendon Burchard",
    "category": "Productivity",
    "status": "Read",
    "rating": 4,
    "cover": "/books/high-performance-habits.jpg"
  },
  {
    "id": 30,
    "title": "Millionaire Success Habits",
    "author": "Dean Graziosi",
    "category": "Productivity",
    "status": "Read",
    "rating": 3,
    "cover": "/books/millionaire-success-habits.jpg"
  },
  {
    "id": 31,
    "title": "12 Rules for Life",
    "author": "Jordan Peterson",
    "category": "Psychology",
    "status": "Read",
    "rating": 4,
    "cover": "/books/12-rules-for-life.jpg"
  },
  {
    "id": 32,
    "title": "Designing for Performance",
    "author": "Lara Hogan",
    "category": "Tech",
    "status": "Read",
    "rating": 4,
    "cover": "/books/designing-for-performance.jpg"
  },
  {
    "id": 33,
    "title": "Release It!",
    "author": "Michael Nygard",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/release-it.jpg"
  },
  {
    "id": 34,
    "title": "Thinking in Systems",
    "author": "Donella Meadows",
    "category": "Strategy",
    "status": "Read",
    "rating": 5,
    "cover": "/books/thinking-in-systems.jpg"
  },
  {
    "id": 35,
    "title": "Building Microservices",
    "author": "Sam Newman",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/building-microservices.jpg"
  },
  {
    "id": 36,
    "title": "Clean Architecture",
    "author": "Robert C. Martin",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/clean-architecture.jpg"
  },
  {
    "id": 37,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/clean-code.jpg"
  },
  {
    "id": 38,
    "title": "AI Superpowers",
    "author": "Kai-Fu Lee",
    "category": "Tech",
    "status": "Read",
    "rating": 4,
    "cover": "/books/ai-superpowers.jpg"
  },
  {
    "id": 39,
    "title": "Accelerate",
    "author": "Nicole Forsgren",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/accelerate.jpg"
  },
  {
    "id": 40,
    "title": "Continuous Delivery",
    "author": "Jez Humble",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/continuous-delivery.jpg"
  },
  {
    "id": 41,
    "title": "Agile Software Development",
    "author": "Robert C. Martin",
    "category": "Tech",
    "status": "Read",
    "rating": 5,
    "cover": "/books/agile-software-development.jpg"
  },
  {
    "id": 42,
    "title": "working backwards",
    "author": "Colin Bryar & Bill Carr",
    "category": "Business",
    "status": "",
    "rating": 0,
    "cover": "/books/working-backwards.jpg"
  },
  {
    "id": 43,
    "title": "How to Read People Like a Book",
    "author": "James W. Williams",
    "category": "Psychology",
    "status": "",
    "rating": 0,
    "cover": "/books/how-to-read-people-like-a-book.jpg"
  },
  {
    "id": 44,
    "title": "The Power of Self-Discipline",
    "author": "Peter Hollins",
    "category": "Personal Development",
    "status": "",
    "rating": 0,
    "cover": "/books/the-power-of-self-discipline.jpg"
  }
];

// Extract unique categories
const categories = ["All", ...Array.from(new Set(library.map(book => book.category)))];

export default function BooksPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Filter Logic
  const filteredBooks = library.filter((book) => {
    const matchesCategory = filter === "All" || book.category === filter;
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || 
                          book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-5xl mx-auto px-6 pb-24 pt-10 animate-in fade-in duration-700">
      
      {/* --- STANDARDIZED HEADER --- */}
      <div className="space-y-6 border-b border-slate-800 pb-10 mb-12">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <BookOpen className="w-4 h-4" />
          Library
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-heading tracking-tight mb-4">
              My <span className="text-primary">Library</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Books that have shaped my thinking, challenged my perspectives, or simply entertained me.
            </p>
          </div>
        </div>

        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center pt-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                            filter === cat 
                            ? "bg-primary text-slate-900 border-primary" 
                            : "bg-surface text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search books..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-surface border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                />
            </div>
        </div>
      </div>

      {/* --- BOOK GRID --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="group relative flex flex-col">
            
            {/* 1. COVER IMAGE CARD */}
            <div className="relative w-full aspect-[2/3] rounded-lg ounded overflow-hidden border border-slate-700/50 hover:border-secondary/100">
                {/* Status Badge */}
                <div className="absolute top-2 right-2 z-10">
                    <StatusBadge status={book.status} />
                </div>

                <Image 
                    src={book.cover} 
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                />
            </div>

            {/* 2. DETAILS */}
            <div className="mt-4 space-y-1">
                <h3 className="text-heading font-bold text-sm md:text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {book.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 line-clamp-1">{book.author}</p>
                
                {/* Rating Stars */}
                {book.rating > 0 && (
                    <div className="flex items-center gap-0.5 pt-1 text-yellow-500/80">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-3 h-3 ${i < book.rating ? "fill-current" : "text-slate-700"}`} 
                            />
                        ))}
                    </div>
                )}
            </div>

          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBooks.length === 0 && (
          <div className="text-center py-20 opacity-50">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-slate-600" />
              <p>No books found.</p>
          </div>
      )}

    </section>
  );
}

// --- HELPER COMPONENT: STATUS BADGE ---
function StatusBadge({ status }: { status: string }) {
    if (status === "Reading") {
        return (
            <span className="flex items-center gap-1 bg-blue-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md shadow-lg">
                <Clock className="w-3 h-3 animate-pulse" /> Now
            </span>
        );
    }
    if (status === "Read") {
        return (
            <span className="flex items-center gap-1 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md shadow-lg">
                <CheckCircle2 className="w-3 h-3" /> Read
            </span>
        );
    }
    return null; // Don't show anything for "Want to read" to keep it clean
}