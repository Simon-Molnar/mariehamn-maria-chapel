import { useState } from "react";
import { Menu, X, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Om Oss", href: "#om-oss" },
    { name: "Mässor", href: "#massor" },
    { name: "Sakrament", href: "#sakrament" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Cross className="w-5 h-5 text-primary" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg tracking-wide text-foreground">
                S:t Maria Församling
              </span>
              <span className="block text-xs text-muted-foreground tracking-widest uppercase">
                Mariehamn
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-body tracking-wide text-muted-foreground hover:text-primary transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline" size="sm" className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Stöd Församlingen
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-body text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="outline" size="sm" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Stöd Församlingen
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
