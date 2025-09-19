import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Code, Database, Gamepad2 } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "JobTrackly",
      category: "web development",
      description: "A comprehensive job tracking application built with modern web technologies for managing job applications and career progress.",
      technologies: ["Python", "Flask", "HTML/CSS", "JavaScript"],
      demoUrl: "https://jobtrackly.pythonanywhere.com/",
      icon: Database,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "E-COMMERCE WEBSITE [SHOP NOW]",
      category: "web development",
      description: "A full-featured e-commerce platform with modern UI/UX, shopping cart functionality, and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoUrl: "https://rohitkshirsagar123.github.io/ShopNow/",
      icon: Globe,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "BUBBLE GAME IN JS",
      category: "Game",
      description: "An interactive bubble game built with vanilla JavaScript featuring engaging gameplay and smooth animations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      demoUrl: "https://rohitkshirsagar123.github.io/Bubble-Game-in-JS/",
      icon: Gamepad2,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Currency Converter",
      category: "web development",
      description: "A real-time currency converter application with live exchange rates and intuitive user interface.",
      technologies: ["API Integration", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/Rohitkshirsagar123/Currency_Converter",
      icon: Code,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "TO DO REACT APP",
      category: "web development",
      description: "A modern task management application built with React, featuring CRUD operations and local storage.",
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      demoUrl: "https://rktodoapp.netlify.app/",
      icon: Code,
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "PLACEMENT PREPARATION WEBSITE",
      category: "web development",
      description: "A comprehensive platform for placement preparation with resources, practice questions, and study materials.",
      technologies: ["Python", "Flask", "HTML/CSS", "Database"],
      demoUrl: "https://learnitpre.pythonanywhere.com/",
      icon: Database,
      color: "from-teal-500/20 to-cyan-500/20",
    },
    {
      title: "QUIZ APP",
      category: "web development",
      description: "An interactive quiz application with multiple choice questions, scoring system, and progress tracking.",
      technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
      demoUrl: "https://rohitkshirsagar123.github.io/JAVASCRIPT_QUIZ_APP/",
      icon: Globe,
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "DevHelperAI",
      category: "software development",
      description: "An AI-powered development assistant tool to help developers with code suggestions and problem-solving.",
      technologies: ["Python", "AI/ML", "API Development"],
      githubUrl: "https://github.com/Rohitkshirsagar123/DevHelperAI",
      icon: Code,
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: "PRODUCT SEARCH ENGINE",
      category: "web development",
      description: "A powerful search engine for products with advanced filtering, sorting, and recommendation features.",
      technologies: ["JavaScript", "Search Algorithms", "HTML/CSS"],
      demoUrl: "https://rohitkshirsagar123.github.io/Product_Search_engine/",
      icon: Database,
      color: "from-rose-500/20 to-pink-500/20",
    },
  ];

  const categories = ["all", "web development", "software development", "Game"];
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-mono text-primary">
                &lt;projects /&gt;
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">PROJECTS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web and software development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="project-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-br ${project.color} border-b border-border`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-background/80 backdrop-blur-sm">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="px-3 py-1 text-xs font-mono bg-background/80 backdrop-blur-sm text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View
                        </a>
                      </Button>
                    )}
                    
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${project.demoUrl ? '' : 'flex-1'} border-primary/40 hover:border-primary hover:bg-primary/10`}
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Note */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">
                {projects.length}+ Projects Completed
              </p>
              <p className="text-muted-foreground">
                Ranging from web applications to enterprise software solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
