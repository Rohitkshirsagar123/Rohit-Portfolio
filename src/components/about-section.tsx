import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Code, Zap, Users } from "lucide-react";
import professionalPhoto1 from "@/assets/professional-photo-1.png";

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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Professional Image with Modern Design - Now on Left */}
            <div className="relative animate-slide-in-left order-2 lg:order-1">
              <div className="relative">
                {/* Main Image Container with Modern Frame */}
                <div className="relative w-full max-w-sm mx-auto">
                  {/* Background Decorative Elements - Better for Light Mode */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-primary/15 rounded-3xl transform -rotate-2 scale-110"></div>
                  
                  <div className="relative z-10 rounded-2xl shadow-2xl border-2 border-primary/30 bg-card overflow-hidden">
                    <AspectRatio ratio={3 / 4} className="relative">
                      <img
                        src={professionalPhoto1}
                        alt="Rohit Kshirsagar - Professional Software Developer"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                      
                      {/* Enhanced Overlay for Better Light Mode Support */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10"></div>
                      
                      {/* Tech Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/95 backdrop-blur-md rounded-lg p-3 border-2 border-primary/30 shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-mono text-primary font-semibold">Available for new projects</span>
                          </div>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                  
                  {/* Floating Tech Icons - Enhanced for Light Mode */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary/40 animate-pulse-slow shadow-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-accent/40 animate-pulse-slow delay-1000 shadow-lg">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                </div>
                
                {/* Animated Background Patterns - Subtle for Light Mode */}
                <div className="absolute top-1/4 -right-8 w-32 h-32 bg-primary/8 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-accent/8 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
              </div>
            </div>

            {/* Content - Now on Right */}
            <div className="animate-slide-in-right order-1 lg:order-2">
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
          </div>

          {/* Highlights Section - Moved Below */}
          <div className="mt-20 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
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
    </section>
  );
}