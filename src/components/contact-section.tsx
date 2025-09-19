import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Malshiras, Solapur, Maharashtra",
      color: "text-red-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8408830283",
      href: "tel:+918408830283",
      color: "text-green-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rohitkshirsagar262@gmail.com",
      href: "mailto:rohitkshirsagar262@gmail.com",
      color: "text-blue-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "http://linkedin.com/in/rohit-kshirsagar-rk",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/Rohitkshirsagar123",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:rohitkshirsagar262@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-mono text-primary">
                &lt;contact /&gt;
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-primary/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-110 group ${social.color}`}
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="tech-card">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      className="w-full border-border focus:border-primary focus:ring-primary/20 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg shadow-tech hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
              <p className="text-muted-foreground mb-2">
                Response time: Usually within 24 hours
              </p>
              <div className="flex justify-center items-center space-x-4 text-sm">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-muted-foreground">Available for freelance</span>
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-muted-foreground">Open to opportunities</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}