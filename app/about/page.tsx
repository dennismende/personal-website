import Image from "next/image";
import { 
  Heart, BookOpen, Plane, ShoppingCart, 
  Laptop, Film, Dices, Trophy, MapPin,
  Users, User, Target, Lightbulb, Layers, Cpu, Smartphone, BrainCircuit, Brain
} from "lucide-react";

export default function AboutPage() {
  
  // 1. INTERESTS DATA
  const interests = [
    { icon: Heart, label: "Family", text: "Always No. 1" },
    { icon: BookOpen, label: "Reading", text: "Constant learning" },
    { icon: Plane, label: "Traveling", text: "Exploring the world" },
    { icon: Laptop, label: "Tech", text: "Dev, Home Automation, ..." },
    { icon: ShoppingCart, label: "Ecommerce", text: "Digital retail" },
    { icon: Film, label: "Movies", text: "Inception, LOTR" },
    { icon: Dices, label: "Boardgames", text: "Gloomhaven, Eclipse" },
    { icon: Trophy, label: "Sports", text: "Soccer & Football" },
  ];

  // 2. BOOKS DATA
  const books = [
    {
      title: "Team Topologies",
      author: "Matthew Skelton",
      color: "from-orange-400 to-amber-600",
      cover: "/books/team-topologies.webp"
    },
    { 
      title: "High Output Management",
      author: "Andrew Grove",
      color: "from-blue-500 to-cyan-600",
      cover: "/books/high-output-management.jpg"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      color: "from-slate-400 to-slate-600",
      cover: "/books/atomic-habits.jpg"
    },
  ];

  // 3. TOOLS DATA
  const tools = {
    hardware: ["MacBook M1 Pro", "Logitech MX Keys", "Logitech MX Master 3", "Airpods Pro 2", "Bose 700 Headphones", "iPhone 14 Pro Max", "Apple Watch Ultra 2"],
    software: ["Home Assistant", "VS Code", "iTerm", "Rectangle Pro", "Notion", "TickTick", "OBS", "Final Cut Pro"],
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pb-24 pt-10 animate-in fade-in duration-700 space-y-20">
      
      {/* --- SECTION 1: RESTORED INTRO LAYOUT --- */}
      <div className="space-y-8">
         
         {/* Standardized Breadcrumb (Kept for consistency) */}
         <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase border-b border-slate-800 pb-4">
            <User className="w-4 h-4" />
            Personal Profile
         </div>

         {/* The 50/50 Grid Layout You Liked */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold text-heading tracking-tight">
                  Hi, I'm <span className="text-primary">Dennis.</span>
                </h1>
                <div className="flex items-center gap-2 text-secondary font-mono text-sm">
                  <MapPin className="w-4 h-4" />
                  Waltrop, Germany
                </div>
              </div>

              <div className="prose prose-invert prose-p:text-slate-400 prose-lg leading-relaxed">
                <p>
                  Welcome to my site! While my career is in technology, this space is about who I am behind the screen.
                </p>
                <p>
                  I'm in my <strong>early 40s</strong> and I live together with my wonderful wife 
                  <span className="text-slate-200 font-medium"> Melanie</span>, our little one 
                  <span className="text-slate-200 font-medium"> Zoey Lynn</span>, and our cat lady
                  <span className="text-slate-200 font-medium"> Luna</span>.
                </p>
              </div>
            </div>

            {/* Right: Image (Floating Square) */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 group">
                <div className="absolute top-4 left-4 w-full h-full bg-slate-800 rounded-2xl border border-slate-700 transition-transform duration-500 group-hover:top-2 group-hover:left-2" />
                <div className="relative w-full h-full bg-surface rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  <Image 
                    src="/family.png" 
                    alt="Dennis and Family"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>

         </div>
      </div>

      {/* --- SECTION 2: THINGS I CARE ABOUT --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
          Things I Care About
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, idx) => (
            <div key={idx} className="bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 transition-colors group">
              <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-200">{item.label}</h3>
              <p className="text-xs text-slate-500 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 3: MY STORY (TEXT) --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
          My Journey
        </h2>
        
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-400 prose-strong:text-slate-200">
          <p>
            I started coding in the 2000s, initially balancing a love for tech with a love for cars. 
            After a brief stint in Engineering, I realized code was my true medium and switched to <strong>Computer Science</strong>.
          </p>
          <p>
            It was the perfect move. I earned my Master's in 2012 and haven't stopped building since.
          </p>
          <p>
            Today, I unite strategic business growth with technical execution as 
            <strong> Account Management Partner & Director Software Development</strong> at <em>Diconium</em>.
          </p>
        </div>
      </div>

      {/* --- NEW SECTION 4: LEADERSHIP PHILOSOPHY --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
          How I Lead
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 transition-colors group">
            <Users className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-heading mb-2">People First</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I see myself as a gardener, not a commander. My job is to remove roadblocks, nurture talent, and empower the team to make their own decisions.
            </p>
          </div>
          <div className="bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 transition-colors group">
            <Lightbulb className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-heading mb-2 ">Growth Mindset</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Failure is data. I encourage experimentation and learning something new every single day.
            </p>
          </div>
          <div className="bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 transition-colors group">
            <Target className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-heading mb-2">Value-Driven Engineering</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Technology is a vehicle for value. I steer teams away from 'shiny object syndrome' to focus on initiatives that drive measurable ROI.
            </p>
          </div>
        </div>
      </div>

      {/* --- NEW SECTION 5: BOOKSHELF --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
           Highly Recommended
        </h2>
        <p className="text-slate-400">Books that have shaped my thinking.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {books.map((book, idx) => (
            <div key={idx} className="group bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 flex items-start gap-4"
      >
                {/* Cover Image Wrapper */}
                <div className="relative w-16 h-24 flex-shrink-0 shadow-lg rounded overflow-hidden border border-slate-700/50">
                  <Image 
                    src={book.cover} 
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center min-h-[6rem]">
                  <h3 className="font-bold text-heading text-lg leading-tight mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-500 italic">by {book.author}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- NEW SECTION 6: MY TOOLBELT --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
           My Toolbelt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Hardware */}
            <div className="bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 transition-colors group">
                <div className="flex items-center gap-3 mb-6">
                    <Cpu className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-heading">Hardware</h3>
                </div>
                <ul className="space-y-3">
                    {tools.hardware.map(item => (
                        <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Software */}
            <div className="bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 transition-colors group">
                <div className="flex items-center gap-3 mb-6">
                    <Layers className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-heading">Software</h3>
                </div>
                <ul className="space-y-3">
                    {tools.software.map(item => (
                        <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* --- NEW SECTION 7: THE "NOW" PAGE --- */}
      <div className="bg-surface border border-slate-800 rounded-2xl p-8 md:p-12 hover:border-secondary/50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between">
             <h2 className="text-2xl font-bold text-heading">
                Current Focus
             </h2>
             <span className="text-xs font-mono text-green-400 border border-green-400/30 bg-green-400/10 px-2 py-1 rounded">
                Active
             </span>
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            I believe in constant evolution. Right now, I'm deep diving into topics around 
            <span className="text-primary"> leadership</span>, 
            <span className="text-secondary"> productivity</span>, and 
            <span className="text-accent"> AI</span>.
          </p>

          <ul className="space-y-2 text-slate-300">
             <li className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" /> 
                Refining decision-making frameworks for high-ambiguity environments
             </li>
             <li className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-secondary" /> 
                Expanding my personal productivity system (Second Brain)
             </li>
             <li className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-accent" /> 
                Deepening my expertise in Artificial Intelligence
             </li>
          </ul>

          <div className="pt-4 text-xs text-slate-600 font-mono">
             Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>

    </section>
  );
}