import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const skills = [
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Programming" },
    { name: "React", level: 75, category: "Frontend" },
    { name: "Python", level: 70, category: "Programming" },
    { name: "C++", level: 70, category: "Programming" },
    { name: "C", level: 70, category: "Programming" },
    { name: "Flask", level: 80, category: "Backend" },
     { name: "SpringBoot", level: 55, category: "Backend" },
    { name: "SQL", level: 75, category: "Database" },
     { name: "Oracle", level: 75, category: "Database" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-mono text-primary">
                &lt;skills /&gt;
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">SKILLS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, categoryIndex) => (
              <div
                key={category}
                className="tech-card animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary border-b border-border pb-2">
                  {category}
                </h3>
                
                <div className="space-y-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm font-mono text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-2 bg-muted"
                          />
                          <div
                            className="absolute top-0 left-0 h-2 skill-bar rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
              <p className="text-muted-foreground mb-2">
                Continuously learning and exploring new technologies
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm font-mono">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                  Always Growing
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-tech-green/10 text-tech-green rounded-full">
                  Team Player
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}