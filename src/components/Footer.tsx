import { Cross } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Cross className="w-5 h-5 text-primary" />
            <span className="font-display text-lg text-foreground">
              Mariehamns Katolska Församling
            </span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            Norra Esplanadgatan 1, Mariehamn • Tel: +358 18 123 456
          </p>
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} S:t Görans Katolska Kyrka. En del av Helsingfors katolska stift.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
