import { CalendarDays, MapPin, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "EXO-FIELD",
      position: "SOFTWARE ENGINEER",
      period: "JUN 2024 - PRESENT",
      type: "Full-time",
      description: "Leading software development initiatives and implementing scalable solutions for enterprise applications.",
      technologies: ["Python", "React", "SQL", "Flask"],
    },
    {
      company: "PIBYTHREE",
      position: "ASSOCIATE SOFTWARE ENGINEER",
      period: "AUG 2022 - SEP 2023",
      type: "Full-time",
      description: "Developed and maintained web applications, collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["JavaScript", "Python", "HTML/CSS", "Database Management"],
    },
    {
      company: "THE SPARKS FOUNDATION",
      position: "WEB DEVELOPER INTERN",
      period: "DEC 2021 - JAN 2022",
      type: "Internship",
      description: "Created responsive web applications and gained hands-on experience in modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
    },
    {
      company: "SKILLVERTEX",
      position: "WEB DEVELOPER INTERN",
      period: "OCT 2021 – DEC 2021",
      type: "Internship",
      description: "Contributed to various web development projects and learned industry best practices for frontend development.",
      technologies: ["Frontend Development", "UI/UX", "Responsive Design"],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-mono text-primary">
                &lt;experience /&gt;
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the roles that shaped my expertise
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center animate-slide-in-${
                    index % 2 === 0 ? 'left' : 'right'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background transform md:-translate-x-4 flex items-center justify-center z-10">
                    <Briefcase className="h-3 w-3 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                  >
                    <div className="tech-card">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {exp.company}
                        </h3>
                        
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {exp.position}
                        </h4>
                        
                        <div className="flex items-center text-muted-foreground text-sm mb-3">
                          <CalendarDays className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">
                3+ Years of Professional Experience
              </p>
              <p className="text-muted-foreground">
                From internships to full-time roles, constantly growing and delivering impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}