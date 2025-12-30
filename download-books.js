const fs = require('fs');
const path = require('path');

const library = [
  {
    id: 1,
    title: "Team Topologies",
    author: "Matthew Skelton & Manuel Pais",
    category: "Leadership",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781942788813-L.jpg"
  },
  {
    id: 2,
    title: "High Output Management",
    author: "Andrew Grove",
    category: "Leadership",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780679762881-L.jpg"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Fiction",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg"
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Productivity",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    id: 5,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg"
  },
  {
    id: 6,
    title: "Measure What Matters",
    author: "John Doerr",
    category: "Strategy",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780525536222-L.jpg"
  },
  {
    id: 7,
    title: "Mastering Uncertainty",
    author: "Matt Watkinson & Csaba Konkoly",
    category: "Strategy",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9781472998774-L.jpg"
  },
  {
    id: 8,
    title: "Winning in the Platform Economy",
    author: "Alexander Graf & Holger Schneider",
    category: "Strategy",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9781521946329-L.jpg"
  },
  {
    id: 9,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Finance",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    id: 10,
    title: "Sell It Like Serhant",
    author: "Ryan Serhant",
    category: "Business",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780316449176-L.jpg"
  },
  {
    id: 11,
    title: "Silicon Valley Investing",
    author: "Thomas Rappold",
    category: "Finance",
    status: "Read",
    rating: 3,
    cover: "https://covers.openlibrary.org/b/isbn/9783898798976-L.jpg"
  },
  {
    id: 12,
    title: "Freakonomics",
    author: "Steven D. Levitt",
    category: "Economics",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780060731328-L.jpg"
  },
  {
    id: 13,
    title: "Das einzige Buch über Finanzen",
    author: "Thomas Kehl",
    category: "Finance",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9783548065847-L.jpg"
  },
  {
    id: 14,
    title: "Leaders Eat Last",
    author: "Simon Sinek",
    category: "Leadership",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781591845324-L.jpg"
  },
  {
    id: 15,
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    category: "Leadership",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780787960759-L.jpg"
  },
  {
    id: 16,
    title: "Surrounded by Idiots",
    author: "Thomas Erikson",
    category: "Psychology",
    status: "Read",
    rating: 3,
    cover: "https://covers.openlibrary.org/b/isbn/9781250179944-L.jpg"
  },
  {
    id: 17,
    title: "Crushing It!",
    author: "Gary Vaynerchuk",
    category: "Business",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780062674678-L.jpg"
  },
  {
    id: 18,
    title: "Management - Von den Besten lernen",
    author: "Frank Arnold",
    category: "Leadership",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9783446419710-L.jpg"
  },
  {
    id: 19,
    title: "Turn the Ship Around!",
    author: "L. David Marquet",
    category: "Leadership",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781591846406-L.jpg"
  },
  {
    id: 20,
    title: "The Manager's Path",
    author: "Camille Fournier",
    category: "Leadership",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781491973899-L.jpg"
  },
  {
    id: 21,
    title: "Start With Why",
    author: "Simon Sinek",
    category: "Leadership",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781591846444-L.jpg"
  },
  {
    id: 22,
    title: "Getting Things Done",
    author: "David Allen",
    category: "Productivity",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780143126560-L.jpg"
  },
  {
    id: 23,
    title: "Think Again",
    author: "Adam Grant",
    category: "Psychology",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9781984878106-L.jpg"
  },
  {
    id: 24,
    title: "The 7 Habits",
    author: "Stephen R. Covey",
    category: "Productivity",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781982181784-L.jpg"
  },
  {
    id: 25,
    title: "Principles",
    author: "Ray Dalio",
    category: "Strategy",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781501124020-L.jpg"
  },
  {
    id: 26,
    title: "No Rules Rules",
    author: "Reed Hastings",
    category: "Business",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780593152386-L.jpg"
  },
  {
    id: 27,
    title: "Wenn jeder dich mag...",
    author: "Martin Wehrle",
    category: "Psychology",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9783442394098-L.jpg"
  },
  {
    id: 28,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg"
  },
  {
    id: 29,
    title: "High Performance Habits",
    author: "Brendon Burchard",
    category: "Productivity",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9781401952853-L.jpg"
  },
  {
    id: 30,
    title: "Millionaire Success Habits",
    author: "Dean Graziosi",
    category: "Productivity",
    status: "Read",
    rating: 3,
    cover: "https://covers.openlibrary.org/b/isbn/9781684192076-L.jpg"
  },
  {
    id: 31,
    title: "12 Rules for Life",
    author: "Jordan Peterson",
    category: "Psychology",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780345816023-L.jpg"
  },
  {
    id: 32,
    title: "Designing for Performance",
    author: "Lara Hogan",
    category: "Tech",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9781491902516-L.jpg"
  },
  {
    id: 33,
    title: "Release It!",
    author: "Michael Nygard",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781680502398-L.jpg"
  },
  {
    id: 34,
    title: "Thinking in Systems",
    author: "Donella Meadows",
    category: "Strategy",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781603580557-L.jpg"
  },
  {
    id: 35,
    title: "Building Microservices",
    author: "Sam Newman",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781492034025-L.jpg"
  },
  {
    id: 36,
    title: "Clean Architecture",
    author: "Robert C. Martin",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780134494166-L.jpg"
  },
  {
    id: 37,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
  },
  {
    id: 38,
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    category: "Tech",
    status: "Read",
    rating: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9781328546395-L.jpg"
  },
  {
    id: 39,
    title: "Accelerate",
    author: "Nicole Forsgren",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9781942788331-L.jpg"
  },
  {
    id: 40,
    title: "Continuous Delivery",
    author: "Jez Humble",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780321601919-L.jpg"
  },
  {
    id: 41,
    title: "Agile Software Development",
    author: "Robert C. Martin",
    category: "Tech",
    status: "Read",
    rating: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780135974445-L.jpg"
  }
];

const outputDir = path.join(__dirname, 'public/books');

(async () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const updatedLibrary = [];

  console.log(`Starting download of ${library.length} books...`);

  for (const book of library) {
    try {
      const extension = path.extname(book.cover) || '.jpg';
      const safeTitle = book.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      const fileName = `${safeTitle}${extension}`;
      const filePath = path.join(outputDir, fileName);

      const response = await fetch(book.cover);
      if (!response.ok) throw new Error(`Failed to fetch ${book.cover}`);
      
      const buffer = await response.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(buffer));

      updatedLibrary.push({
        ...book,
        cover: `/books/${fileName}`
      });

      console.log(`✅ Downloaded: ${book.title}`);
    } catch (error) {
      console.error(`❌ Error downloading ${book.title}:`, error.message);
      updatedLibrary.push(book);
    }
  }

  console.log("\n--- COPY THE CODE BELOW TO YOUR books/page.tsx ---\n");
  console.log(`const library = ${JSON.stringify(updatedLibrary, null, 2)};`);
})();