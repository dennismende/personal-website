import { BadgeCheck, Briefcase, GraduationCap, Award, FileText, CheckCircle2, Tags } from "lucide-react";

export default function CVPage() {
  const experiences = [
    {
      id: 1,
      company: "diconium",
      totalPeriod: "Nov 2021 - Present",
      roles: [
        {
          title: "Director, Digital Engineering & Strategy",
          period: "Nov 2021 - Present",
          description: "Senior leadership role bridging engineering operations and commercial strategy. Currently driving strategic growth for enterprise accounts, following a successful tenure as Unit Lead for a 120-person engineering organization. Progressed through key leadership positions (Unit Lead, Hub Lead, Account Management Partner) with focus on P&L and organizational scalability.",
          achievements: [
            "Unit General Management (Unit Lead): Directed an engineering organization of 120+ developers and architects with full P&L responsibility.",
            "Commercial Strategy (Current): Managing the commercial forecast, yearly planning, and profitability for multi-million euro enterprise accounts.",
            "Organizational Transformation: Co-led the strategic transition to a new operating model (Client Hubs), defining governance frameworks for the shared leadership structure.",
            "Technical Vision: Established the 'T-Shaped' engineering competence strategy across the division, modernizing the talent pool to align with future market needs."
          ],
          competencies: ["General Management", "P&L Management", "Org Transformation", "Digital Strategy"]
        }
      ]
    },
    {
      id: 2,
      company: "Foot Locker",
      totalPeriod: "Apr 2015 - Oct 2021",
      roles: [
        {
          title: "Director, Global Frontend Development & Architecture",
          period: "Oct 2020 - Oct 2021",
          description: "Rapidly promoted through the ranks to lead global frontend strategy for a Fortune 500 retailer. Held a dual mandate: defining the global architectural frontend roadmap while maintaining operational ownership of critical data systems (PIM/SIM) across EMEA and APAC.",
          achievements: [
            "Business Impact & Growth: Served as a key technical driver behind a ~40% growth in DTC revenue. Modernized the e-commerce platform to improve UX/UI performance.",
            "Enterprise Architecture: Spearheaded the global transition from legacy monoliths to a scalable Micro-Frontend Architecture (AEM integration).",
            "Global Operations: Owned the Product & Store Information Management ecosystems for EMEA & APAC, ensuring data integrity across multiple continents.",
            "Team Scaling: Built and aligned distributed engineering teams to execute complex, multi-region platform initiatives."
          ],
          competencies: ["Global Strategy", "Micro-Frontends", "Revenue Growth", "Cross-Functional Leadership"]
        },
        {
          title: "Manager / Senior Manager Software Development",
          period: "Apr 2015 - Sep 2020",
          description: "Led cross-functional engineering teams (Frontend & Backend) in the development of critical global platforms. Acted as a hybrid Product Owner and Technical Lead to drive the transition from legacy workflows to modern cloud architectures.",
          achievements: [
            "Cloud-Native Modernization: Architected a scalable CI/CD infrastructure, significantly reducing deployment times and operational overhead.",
            "Global Delivery: Successfully delivered multi-continental projects for EMEA & APAC markets ahead of schedule.",
            "Agile Transformation: Established Scrum methodologies and DevOps cultures as a certified SCRUM Master.",
            "Community Building: Launched and managed a Germany-wide tech meetup group to foster knowledge sharing and recruiting."
          ],
          competencies: ["Cloud Strategy", "DevOps Culture", "Agile Transformation", "Technical Program Mgmt"]
        }
      ]
    },
    {
      id: 3,
      company: "Early Career & Engineering Foundation",
      totalPeriod: "Jun 2006 - Mar 2015",
      roles: [
        {
          title: "Software Engineering & Leadership (Microsoft, Fraunhofer, Tredex)",
          period: "Jun 2006 - Mar 2015",
          description: "Foundational years building scalable web architectures and leading agile development teams. Progressed from hands-on software engineering to technical leadership.",
          achievements: [
            "Technical Leadership: Conception and implementation of complex web applications.",
            "Process Optimization: Integrated project management systems to improve workflow efficiency and shorten release cycles.",
            "Team Development: Mentored engineers regarding technical skillsets and workflow efficiency."
          ],
          competencies: ["Technical Architecture", "Product Engineering", "Team Leadership", "Process Optimization"]
        }
      ]
    }
  ];

  const certifications = [
    {
      title: "Generative AI Basics",
      issuer: "DECAID Academy",
      year: "2025"
    },
    {
      title: "Certified Agile Leadership",
      issuer: "die.agilen GmbH",
      year: "2024"
    },
    {
      title: "C-Level Communication",
      issuer: "DVAK Deutsche Vertriebs Akademie GmbH",
      year: "2022"
    },
    {
      title: "Professional Scrum with Kanban - PSK 1",
      issuer: "Scrum.org",
      year: "2019"
    },
    {
      title: "iSAQB Certified Professional for Software Architecture",
      issuer: "iSQI Group",
      year: "2018"
    },
    {
      title: "Professional Scrum Product Owner - PSPO 1", 
      issuer: "Scrum.org",
      year: "2018"
    },
    {
      title: "Professional Scrum Master",
      issuer: "TÜV SÜD Akademie GmbH",
      year: "2015"
    }
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-24 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
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
            <strong>Senior Technology Leader</strong> with <strong>19+ years of experience</strong> bridging technical execution and commercial strategy. 
            Proven success leading large-scale engineering organizations (<strong>120+ FTEs</strong>) and managing multi-million Euro P&Ls.
            </p>
        </div>
      </div>

      <div className="mb-24">
        <div className="flex items-center gap-3 mb-12 text-primary">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-2xl font-semibold tracking-wide uppercase">Professional Experience</h2>
        </div>

        <div className="space-y-16">
          {experiences.map((company, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
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

              <div className="md:col-span-8 lg:col-span-9 space-y-16 relative border-l border-slate-800 ml-3 md:ml-0 pl-8 md:pl-12">
                
                {company.roles.map((role, rIdx) => (
                  <div key={rIdx} className="relative group">
                    
                    <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full border-2 border-slate-600 bg-background group-hover:border-primary group-hover:bg-primary transition-colors z-10" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                      <h4 className="text-xl font-bold text-slate-200 group-hover:text-primary transition-colors">
                        {role.title}
                      </h4>
                      <span className="text-sm font-mono text-slate-500 whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                      
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      {role.description}
                    </p>

                    {role.achievements && (
                        <ul className="space-y-3 mb-6">
                            {role.achievements.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed text-base">{item.includes(':') ? (
                                      <>
                                        <strong className="text-slate-200">{item.split(':')[0]}:</strong>
                                        {item.split(':')[1]}
                                      </>
                                    ) : (
                                      item
                                    )}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {role.competencies && (
                        <div className="flex flex-wrap gap-2 items-center pt-2">
                           <Tags className="w-4 h-4 text-slate-500 mr-2" />
                           {role.competencies.map((tag) => (
                              <span key={tag} className="px-3 py-1 border bg-surface border-slate-800 text-xs text-slate-400 rounded-md hover:border-primary/30 transition-colors cursor-default">
                                {tag}
                              </span>
                           ))}
                        </div>
                    )}

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="flex items-center gap-3 mb-10 text-primary">
          <BadgeCheck className="w-6 h-6" />
          <h2 className="text-2xl font-semibold tracking-wide uppercase">Certifications & Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {certifications.map((cert, idx) => (
             <div key={idx} className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all hover:-translate-y-1 group flex flex-col justify-between h-full">
                <div>
                    <span className="text-xl font-bold text-secondary font-mono mb-4 block">
                        {cert.year}
                    </span>
                    
                    <h3 className="font-bold text-heading text-lg mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500">
                        {cert.issuer}
                    </p>
                </div>
             </div>
           ))}
        </div>
      </div>

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