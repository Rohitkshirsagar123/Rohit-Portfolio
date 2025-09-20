import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <span className="font-mono font-semibold gradient-text">RK.dev</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
             <span>© {new Date().getFullYear()} Rohit Kshirsagar.</span>
            {/* <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>using React & TypeScript</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}