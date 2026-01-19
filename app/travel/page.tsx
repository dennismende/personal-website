import WorldMap from "@/components/WorldMap";
import { Globe, Map } from "lucide-react";

export default function TravelPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24 pt-10 animate-in fade-in duration-700">
      
      <div className="space-y-6 border-b border-slate-800 pb-10 mb-12">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Globe className="w-4 h-4" />
          Travel Log
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-heading tracking-tight mb-4">
          My Global <span className="text-primary">Footprint</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Traveling is about more than just sightseeing; it's about gaining new perspectives and understanding different cultures. 
            Here is a visual record of the nations I have explored so far.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <WorldMap />
        
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-mono pt-4">
           <Map className="w-3 h-3" />
           <span>Hover over the map to see country names</span>
        </div>
      </div>

    </section>
  );
}