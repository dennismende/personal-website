import { BadgeCheck, Briefcase, GraduationCap, Award, FileText, CheckCircle2, Tags } from "lucide-react";

export default function CVPage() {
  const experiences = [
    {
      id: 1,
      company: "diconium",
      totalPeriod: "Nov 2021 - Present",
      roles: [
        {
          title: "Account Management Partner",
          period: "Nov 2025 - Present",
          description: "Strategic lead for key enterprise accounts. Orchestrating yearly planning, commercial forecasting, and long-term digital roadmaps while retaining oversight of engineering delivery quality.",
          achievements: [
            "P&L Ownership: Managing the commercial forecast and yearly planning for multi-million euro accounts.",
            "Strategic Growth: Aligning client business goals with Diconium’s service portfolio to drive sustainable revenue.",
            "C-Level Advisory: Acting as the primary strategic partner and escalation point for client stakeholders."
          ],
          competencies: ["Commercial Strategy", "P&L Management", "Executive Stakeholder Mgmt", "Client Growth"]
        },
        {
          title: "Client Hub Lead",
          period: "Oct 2023 - Sep 2025",
          description: "Driver of organizational transformation within a shared leadership trio. Took full accountability for a dedicated Client Hub, managing the P&L, client relationships, and delivery operations while navigating a major organizational restructure.",
          achievements: [
            "Organizational Transformation: Successfully established the new 'Client Hub' operating model, defining governance for the shared leadership team.",
            "Holistic Accountability: Owned the full lifecycle of the hub's client portfolio, bridging the gap between commercial targets and engineering reality.",
            "Operational Resilience: Ensured delivery continuity and commercial stability during a major organizational restructure, minimizing impact on clients and teams."
          ],
          competencies: ["Organizational Transformation", "Shared Leadership", "Change Management", "Competence Development"]
        },
        {
          title: "Unit Lead - Experience Engineering",
          period: "Dec 2022 - Sep 2023",
          description: "Led the Experience Engineering unit (~120 employees) that was a part of Diconium's largest sub-entity (diconium digital solutions - dds) within a shared leadership team. As a member of the dds Management Board, I was responsible for the unit's P&L, productivity, hiring strategy, and holistic people development.",
          achievements: [
            "Management Board Membership: Served on the dds managemenet board, shaping high-level entity strategy and operational direction.",
            "Scale & Operations: Managed the productivity and utilization of 120+ employees across interdisciplinary product teams.",
            "People Development: Prioritized the growth of T-shaped engineers, fostering cross-functional software engineering skills.",
            "Strategic Hiring: aligned talent acquisition strategy with future client needs to ensure organizational readiness."
          ],
          competencies: ["General Management", "Large-Scale Leadership", "P&L Ownership", "Talent Strategy"]
        },
        {
          title: "Director Software Development (Competence & People)",
          period: "Nov 2021 - present",
          description: "Focused on the core mission of the Director role: Leading and growing a team of software engineers across multiple clients. Prioritized the evolution of the 'T-Shaped' developer profile and competence development.",
          achievements: [
            "Competence Strategy: Active member of Frontend & Content Management competence orgs, driving the vision of Full Stack engineering.",
            "People Development: Established frameworks for developing T-shaped engineers, ensuring readiness for future market technology needs.",
            "Technical Culture: Fostered a culture of continuous learning and cross-functional skill acquisition."
          ],
          competencies: ["People Development", "Competence Strategy", "Tech Vision", "T-Shape Mentoring"]
        }
      ]
    },
    {
      id: 2,
      company: "Foot Locker",
      totalPeriod: "Apr 2015 - Oct 2021",
      roles: [
        {
          title: "Director Frontend Development",
          period: "Oct 2020 - Oct 2021",
          description: "Held a dual mandate driving global architectural strategy and regional operations. Globally responsible for the e-commerce frontend while retaining ownership of data product systems (PIM/SIM) for EMEA and APAC.",
          achievements: [
            "Business Impact: Directly contributed to ~40% growth in the DTC business through platform modernization and improved UX.",
            "Architectural Strategy: Spearheaded the global transition to a micro-frontend architecture, integrating Adobe Experience Manager (AEM) for scalable content and personalization.",
            "Operational Leadership: Directed the product and store information management ecosystems for EMEA & APAC, ensuring data integrity across markets.",
            "Team Scaling: Built and aligned distributed engineering teams to execute complex, multi-region platform initiatives."
          ],
          competencies: ["Micro-Frontend Strategy", "Global Architecture", "Adobe - AEM / Content Strategy", "Cross-Functional Leadership"]
        },
        {
          title: "Manager / Senior Manager Software Development",
          period: "Apr 2015 - Sep 2020",
          description: "Led cross-functional engineering teams (Frontend & Backend) in the development of critical global platforms. Acted as a hybrid Product Owner and Technical Lead to drive the transition from legacy workflows to modern cloud architectures.",
          achievements: [
            "Cloud-Native Modernization: Architected a scalable CI/CD infrastructure, significantly reducing deployment times and operational overhead.",
            "Global Delivery: Successfully delivered multi-continental projects (Product & Store Information Management) for EMEA & APAC markets ahead of schedule.",
            "Agile Transformation: Established Scrum methodologies and DevOps cultures as a certified SCRUM Master.",
            "Community Building: Launched and managed a Germany-wide tech meetup group to foster knowledge sharing and recruiting."
          ],
          competencies: ["Cloud Strategy", "DevOps Culture", "Agile Transformation", "Technical Program Mgmt"]
        }
      ]
    },
    {
      id: 3,
      company: "Previous Tech Roles (Foot Locker, Tredex, Fraunhofer IML, Microsoft)",
      totalPeriod: "Jun 2006 - Mar 2015",
      roles: [
        {
          title: "Software Engineering & Engineering Leadership",
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
            A track record of uniting <strong>commercial strategy</strong> with <strong>engineering excellence</strong>. 
            Proven progression from hands-on building to executive leadership.
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
                                    <span className="leading-relaxed text-base">{item}</span>
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