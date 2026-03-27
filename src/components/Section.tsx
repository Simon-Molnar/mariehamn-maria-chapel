import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "default" | "secondary" | "card";
}

const Section = ({ children, className, bg = "default" }: SectionProps) => {
  const bgClass = {
    default: "",
    secondary: "bg-secondary",
    card: "bg-card",
  }[bg];

  return (
    <section className={cn(bgClass, className)}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {children}
      </div>
    </section>
  );
};

export default Section;
