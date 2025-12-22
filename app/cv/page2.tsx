import { Briefcase, GraduationCap, Award, FileText } from "lucide-react";

export default function CVPage() {
  const experiences = [
    {
      id: 1,
      company: "Diconium",
      totalPeriod: "2021 - Present",
      // LIST ROLES IN REVERSE CHRONOLOGICAL ORDER (Newest first)
      roles: [
        {
          title: "Account Management Partner",
          period: "Jan 2024 - Present",
          description: "Expanded scope to include commercial responsibility. Orchestrating yearly planning, P&L management, and strategic growth for key enterprise accounts while retaining engineering oversight.",
          highlights: ["P&L Ownership", "Strategic Account Development", "C-Level Advisory"]
        },
        {
          title: "Director Software Development",
          period: "Jul 2023 - Present",
          description: "Leading the software development unit. Scaling high-performance teams through a culture of psychological safety and outcome-driven delivery.",
          highlights: ["Org Design", "Engineering Culture", "Delivery Excellence"]
        }
      ]
    },
    {
      id: 2,
      company: "Foot Locker",
      totalPeriod: "2014 - 2021",
      roles: [
        {
          title: "Director Engineering & Product (EMEA & APAC)",
          period: "Nov 2021 - Jun 2023",
          description: "Promoted to lead the strategic delivery of key platform domains including Frontend Architecture, PIM, and Store Systems across two major continents.",
          highlights: ["~40% DTC Growth Contribution", "Global Team Scaling", "Tech Strategy"]
        },
        {
          title: "Manager / Senior Manager Engineering",
          period: "2018 - 2021",
          description: "Led cross-functional engineering teams (Frontend & Backend) in the development of critical global platforms, including Product Information Management (PIM) and Store Information Management systems. acted as a hybrid Product Owner and Technical Lead to drive the transition from legacy workflows to modern cloud architectures.",
          highlights: ["Agile Transformation", "CI/CD Implementation", "Frontend Modernization"]
        }
      ]
    },
    {
      id: 3,
      company: "Previous Tech Roles",
      totalPeriod: "2006 - 2014",
      roles: [
        {
          title: "Senior Engineering Leadership",
          period: "2012 - 2018",
          description: "Foundational years building scalable web architectures and leading agile development teams. Progressed from hands-on software engineering to technical leadership.",
          highlights: ["Full Stack Development", "System Architecture", "Team Lead"]
        }
      ]
    }
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-24 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* --- STANDARDIZED HEADER --- */}
      <div className="space-y-6 border-b border-slate-800 pb-10 mb-20">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <FileText className="w-4 h-4" />
          Professional History
        </div>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-heading tracking-tight mb-6">
          Curriculum <span className="text-primary">Vitae</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
          A track record of uniting <strong>commercial strategy</strong> with <strong>engineering excellence</strong>. 
          Proven progression from hands-on building to executive leadership.
          </p>
        </div>
      </div>

      {/* Experience Grid */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-12 text-primary">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-2xl font-semibold tracking-wide uppercase">Professional Experience</h2>
        </div>

        <div className="space-y-16">
          {experiences.map((company, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* LEFT COLUMN: COMPANY INFO (Sticky) */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="sticky top-32">
                   <h3 className="text-3xl font-bold text-heading group-hover:text-primary transition-colors">
                    {company.company}
                  </h3>
                  <span className="text-secondary font-mono mt-2 block text-sm tracking-wider border-l-2 border-secondary pl-3">
                    {company.totalPeriod}
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN: NESTED ROLES TIMELINE */}
              <div className="md:col-span-8 lg:col-span-9 space-y-12 relative border-l border-slate-800 ml-3 md:ml-0 pl-8 md:pl-12">
                
                {company.roles.map((role, rIdx) => (
                  <div key={rIdx} className="relative group">
                    
                    {/* The Timeline Dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full border-2 border-slate-600 bg-background group-hover:border-primary group-hover:bg-primary transition-colors z-10" />
                    
                    {/* Role Details */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                        <h4 className="text-xl font-bold text-slate-200 group-hover:text-primary transition-colors">
                          {role.title}
                        </h4>
                        <span className="text-sm font-mono text-slate-500 whitespace-nowrap">
                          {role.period}
                        </span>
                      </div>
                      
                      <p className="text-slate-400 text-lg leading-relaxed">
                        {role.description}
                      </p>

                      {/* Mini Highlights Pills */}
                      <div className="flex flex-wrap gap-2">
                        {role.highlights.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-surface border border-slate-800 text-xs text-slate-400 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Education Grid (Unchanged) */}
      <div>
        <div className="flex items-center gap-3 mb-10 text-primary">
          <GraduationCap className="w-6 h-6" />
          <h2 className="text-2xl font-semibold tracking-wide uppercase">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface p-8 rounded-xl border border-slate-800 hover:border-secondary/50 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-heading">M.Sc. Computer Science</h3>
                    <Award className="w-5 h-5 text-slate-600 group-hover:text-secondary" />
                </div>
                <p className="text-primary text-lg">Ruhr University Bochum</p>
                <p className="text-slate-500 mt-1">2012</p>
            </div>
        </div>
      </div>
    </section>
  );
}