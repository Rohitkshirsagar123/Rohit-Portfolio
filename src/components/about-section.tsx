import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Zap, Users } from "lucide-react";
import professionalPhoto2 from "@/assets/professional-photo-2.png";

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

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-2 animate-slide-in-left">
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

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className="text-center p-4 rounded-lg bg-card/50 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 w-fit mx-auto mb-3">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-semibold mb-1 text-foreground">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>

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

            {/* Professional Photo 2 */}
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <div className="relative mx-auto w-64 h-80 lg:w-72 lg:h-96 overflow-hidden rounded-2xl shadow-tech border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <img
                    src={professionalPhoto2}
                    alt="Rohit Kshirsagar - Professional Developer at Work"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Professional Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-primary/10 rounded-full blur-lg animate-pulse-slow delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}