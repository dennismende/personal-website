"use client";

import { useEffect, useState, useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { Tooltip } from "react-tooltip";

// 1. STABLE URL (Official World Atlas)
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// 2. VISITED DATA (ISO Numeric Codes)
// You can look up new codes here: https://en.wikipedia.org/wiki/ISO_3166-1_numeric
const visitedCountries = [
  // --- Europe ---
  "276", // Germany
  "250", // France
  "380", // Italy
  "724", // Spain (Includes Canary Islands)
  "826", // United Kingdom
  "528", // Netherlands
  "040", // Austria
  "620", // Portugal
  "203", // Czech Republic
  "300", // Greece

  // --- North & Central America / Caribbean ---
  "840", // USA
  "484", // Mexico
  "388", // Jamaica
  "084", // Belize
  "340", // Honduras (Roatan)
  "188", // Costa Rica
  "591", // Panama
  "214", // Dominican Republic

  // --- South America ---
  "170", // Colombia

  // --- Asia / Middle East ---
  "764", // Thailand
  "784", // United Arab Emirates (Dubai / Abu Dhabi)
  "512", // Oman (Muscat / Khasab)
];

export default function WorldMap() {
  const [geographies, setGeographies] = useState<any[]>([]);

  useEffect(() => {
    fetch(GEO_URL)
      .then((res) => res.json())
      .then((data) => {
        // Standard world-atlas structure: data.objects.countries
        // @ts-ignore
        const countries = feature(data, data.objects.countries).features;
        setGeographies(countries);
      });
  }, []);

  const projection = useMemo(() => {
    return geoMercator()
      .scale(100)
      .translate([800 / 2, 450 / 2]);
  }, []);

  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection);
  }, [projection]);

  return (
    <div className="w-full h-auto border border-slate-800 rounded-2xl overflow-hidden bg-surface relative">
      
      <svg viewBox="0 0 800 450" className="w-full h-full">
        <g>
          {geographies.map((geo, i) => {
            // geo.id is the numeric code (e.g., "276")
            const isVisited = visitedCountries.includes(geo.id); 
            const countryName = geo.properties.name;

            return (
              <path
                key={geo.id || i}
                d={pathGenerator(geo) || undefined}
                
                // TOOLTIP
                data-tooltip-id="map-tooltip"
                data-tooltip-content={countryName}
                
                // STYLING
                fill={isVisited ? "#c4b5fd" : "#1f2937"} 
                stroke="#1f2028"
                strokeWidth={0.8}
                className={`outline-none transition-colors duration-300 ${
                  isVisited 
                    ? "hover:fill-[#ddd6fe]" 
                    : "hover:fill-[#374151]"
                }`}
              />
            );
          })}
        </g>
      </svg>

      <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl pointer-events-none">
         <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Exploration Stats</p>
         <p className="text-2xl font-bold text-heading">
            {visitedCountries.length} <span className="text-base font-normal text-slate-500">Countries</span>
         </p>
      </div>

      <Tooltip 
        id="map-tooltip" 
        style={{ 
            backgroundColor: "#0f172a", 
            color: "#e2e8f0", 
            borderRadius: "8px",
            fontSize: "12px",
            border: "1px solid #334155",
            zIndex: 50
        }} 
      />
    </div>
  );
}