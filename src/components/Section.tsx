import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  bg?: "default" | "secondary" | "card";
}

const Section = ({ children, className, narrow = false, bg = "default" }: SectionProps) => {
  const bgClass = {
    default: "",
    secondary: "bg-secondary",
    card: "bg-card",
  }[bg];

  return (
    <section className={cn("py-16 md:py-20", bgClass, className)}>
      <div className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-7xl"
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
