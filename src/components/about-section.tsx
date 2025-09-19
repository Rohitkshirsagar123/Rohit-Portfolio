import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Zap, Users } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid prototyping and agile development practices",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with strong communication skills",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-mono text-primary">
                &lt;about /&gt;
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">ME</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
                Software Engineer / Web Developer
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Passionate Software Engineer with a strong commitment to crafting 
                elegant, user-friendly interfaces and building robust, scalable 
                software solutions to meet diverse business needs.
              </p>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                With extensive experience in modern web technologies and software 
                development practices, I focus on delivering high-quality solutions 
                that not only meet technical requirements but also provide exceptional 
                user experiences.
              </p>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="http://linkedin.com/in/rohit-kshirsagar-rk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Highlights */}
            <div className="animate-slide-in-right">
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className="tech-card group cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}