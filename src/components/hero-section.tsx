import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import professionalPhoto2 from "@/assets/professional-photo-2.png";
import professionalPhoto1 from "@/assets/professional-photo-1.png";

export function HeroSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "http://linkedin.com/in/rohit-kshirsagar-rk",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Rohitkshirsagar123",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:rohitkshirsagar262@gmail.com",
      label: "Gmail",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-glow overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in  max-w-xl mx-auto lg:mx-0">
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-mono text-primary">
                &lt;developer&gt;
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi! I'm{" "}
              <span className="gradient-text">Rohit Kshirsagar</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground">
              I am a{" "}
              <span className="text-primary font-mono">Software Engineer</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              A Web Developer with an In-Depth Grasp of Web and Software 
              Development, Shaping Digital Solutions for Comprehensive Success
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-tech hover:shadow-glow transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://rohitkshirsagar123.github.io/Rkweb/Rohit_Kshirsagar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative animate-slide-in-right flex justify-center lg:justify-end">
            <div className="relative z-10">
              {/* Single Main Photo - Better Fitted */}
              <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[480px] overflow-hidden rounded-2xl shadow-tech border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <img
                  src={professionalPhoto2}
                  alt="Rohit Kshirsagar - Professional Software Developer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay for Professional Look */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse-slow delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/10 rounded-full blur-lg animate-pulse-slow delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}