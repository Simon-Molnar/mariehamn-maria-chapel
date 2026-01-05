import { Clock, Calendar, BookOpen, MapPin } from "lucide-react";

const QuickInfoCards = () => {
  const cards = [
    {
      icon: Clock,
      title: "Mässtider",
      lines: ["Varannan lördag 10:00"],
    },
    {
      icon: Calendar,
      title: "Evenemang",
      lines: ["Se vår kalender", "för kommande aktiviteter"],
    },
    {
      icon: BookOpen,
      title: "Bibelstudier",
      lines: ["Fredagar 19:00", "Alla välkomna"],
    },
    {
      icon: MapPin,
      title: "Hitta hit",
      lines: ["Norra Esplanadgatan 1", "Mariehamn"],
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-hover transition-shadow duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">
                {card.title}
              </h3>
              {card.lines.map((line, i) => (
                <p key={i} className="font-body text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoCards;
