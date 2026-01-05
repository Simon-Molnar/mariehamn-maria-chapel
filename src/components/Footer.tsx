import { Cross } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-navy-deep border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <Cross className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-display text-lg tracking-wide text-foreground">
                S:t Maria Församling
              </span>
              <span className="block text-xs text-muted-foreground">
                Mariehamns Katolska Församling
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#om-oss" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Om oss
            </a>
            <a href="#massor" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Mässtider
            </a>
            <a href="#sakrament" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Sakrament
            </a>
            <a href="#kontakt" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Diocese */}
          <div className="text-center md:text-right">
            <p className="font-body text-xs text-muted-foreground">
              En del av Helsingfors katolska stift
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Den universella katolska Kyrkan
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} S:t Maria Katolska Församling, Mariehamn. 
            <span className="block sm:inline sm:ml-1">
              Ad Maiorem Dei Gloriam.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
