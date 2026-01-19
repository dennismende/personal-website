import Image from "next/image";
import { 
  Heart, BookOpen, Plane,  
  Laptop, Film, Dices, Trophy, MapPin,
  Users, User, Target, Lightbulb,  BrainCircuit, Brain, Mountain
} from "lucide-react";

export default function AboutPage() {
  
  const interests = [
    { icon: Heart, label: "Family", text: "My foundation" },
    { icon: BookOpen, label: "Reading", text: "Non-fiction junkie" },
    { icon: Plane, label: "Traveling", text: "Cultural exploration" },
    { icon: Laptop, label: "Home Lab", text: "Automating everything" },
    { icon: Mountain, label: "Outdoors", text: "Hiking & Nature" },
    { icon: Film, label: "Cinema", text: "Sci-Fi & Epics" },
    { icon: Dices, label: "Strategy", text: "Complex Boardgames" },
    { icon: Trophy, label: "Sports", text: "Football enthusiast" },
  ];

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

  return (
    <section className="max-w-5xl mx-auto px-6 pb-24 pt-10 animate-in fade-in duration-700 space-y-20">
      
      <div className="space-y-8">
         
         <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase border-b border-slate-800 pb-4">
            <User className="w-4 h-4" />
            Personal Profile
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
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
                  Welcome to my corner of the internet. While my day job involves steering large-scale technology units, this space is about the human behind the strategy.
                </p>
                <p>
                  I'm a believer in <strong>lifelong learning</strong> and <strong>deliberate practice</strong>. When I'm not optimizing engineering organizations, I'm usually optimizing my home automation setup or losing a strategy board game.
                </p>
                <p>
                  I live in Germany with my wonderful wife 
                  <span className="text-slate-200 font-medium"> Melanie</span>, our daughter 
                  <span className="text-slate-200 font-medium"> Zoey Lynn</span>, and our cat 
                  <span className="text-slate-200 font-medium"> Luna</span>.
                </p>
              </div>
            </div>

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

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
          Beyond the Desk
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

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
          The Journey
        </h2>
        
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-400 prose-strong:text-slate-200">
          <p>
            My path to leadership wasn't linear. I started in the 2000s as a hands-on builder, obsessed with the logic of code and the intricacies of hardware. That technical foundation gave me the "first principles" understanding I still use today.
          </p>
          <p>
            The pivotal moment came at <strong>Foot Locker</strong>. Leading global teams and driving a 40% growth in digital revenue taught me that <em>code doesn't scale linearly—people do.</em> I shifted my focus from architecting systems to architecting organizations.
          </p>
          <p>
            Today, as a <strong>Senior Technology Leader at Diconium</strong>, I operate at the intersection of commercial strategy and engineering excellence. I build environments where 120+ engineers can thrive, ensuring that technology isn't just a cost center, but the primary driver of business value.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
          Leadership Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border border-slate-800 p-6 rounded-xl hover:border-secondary/50 transition-colors group">
            <Users className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-heading mb-2">Empowerment over Command</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I don't micro-manage. I set the "North Star" and clear the path. My role is to give smart people the context and psychological safety they need to make brilliant decisions.
            </p>
          </div>
          <div className="bg-surface border border-slate-800 p-6 rounded-xl hover:border-secondary/50 transition-colors group">
            <Lightbulb className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-heading mb-2 ">Failure is Data</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              In complex systems, perfection is impossible. I champion a culture of rapid experimentation, where "failures" are simply the cost of tuition for innovation.
            </p>
          </div>
          <div className="bg-surface border border-slate-800 p-6 rounded-xl hover:border-secondary/50 transition-colors group">
            <Target className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-heading mb-2">Outcome {'>'} Output</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We don't high-five for shipping features; we high-five for moving business metrics. I align engineering efforts strictly with tangible commercial ROI.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-heading border-l-4 border-primary pl-4">
           Bookshelf
        </h2>
        <p className="text-slate-400">Three books that fundamentally changed how I view management.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {books.map((book, idx) => (
            <div key={idx} className="group bg-surface border border-slate-800 p-4 rounded-xl hover:border-secondary/50 flex items-start gap-4 transition-all hover:-translate-y-1">
                <div className="relative w-16 h-24 flex-shrink-0 shadow-lg rounded overflow-hidden border border-slate-700/50">
                   <div className={`w-full h-full bg-gradient-to-br ${book.color}`} />
                    <Image 
                      src={book.cover} 
                      alt={book.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                </div>

                <div className="flex flex-col justify-center min-h-[6rem]">
                  <h3 className="font-bold text-heading text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-500 italic">by {book.author}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface border border-slate-800 rounded-2xl p-8 md:p-12 hover:border-secondary/50 relative overflow-hidden">
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
            I believe that if you aren't upgrading your operating system, you're obsolete. 
            Right now, I'm deep diving into the intersection of 
            <span className="text-primary"> organizational design</span> and 
            <span className="text-secondary"> generative AI</span>.
          </p>

          <ul className="space-y-4 text-slate-300 pt-2">
             <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> 
                <span>
                  <strong>Decision Frameworks:</strong> Refining models for high-ambiguity strategic planning.
                </span>
             </li>
             <li className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /> 
                <span>
                  <strong>Knowledge Management:</strong> Expanding my "Second Brain" system to handle information overload.
                </span>
             </li>
             <li className="flex items-start gap-3">
                <BrainCircuit className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /> 
                <span>
                  <strong>AI Strategy:</strong> Moving beyond the hype to implement practical LLM workflows in enterprise environments.
                </span>
             </li>
          </ul>

          <div className="pt-6 text-xs text-slate-600 font-mono border-t border-slate-800 mt-6">
             Status: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>

    </section>
  );
}