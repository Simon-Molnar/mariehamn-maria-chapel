import { Church, Users, Cross, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const QuickInfoCards = () => {
  const cards = [
    {
      icon: Church,
      title: "Gudstjänster",
      lines: ["Söndagar kl. 10:00", "Alla välkomna"],
      link: "/gudstjanster",
    },
    {
      icon: Users,
      title: "Aktiviteter",
      lines: ["Gemenskap & möten", "Se vår kalender"],
    },
    {
      icon: Cross,
      title: "Sakrament",
      lines: ["Dop, bikt, nattvard", "Kontakta oss för info"],
    },
    {
      icon: Heart,
      title: "Barn & Ungdom",
      lines: ["Söndagsskola", "Ungdomsgrupp"],
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const CardContent = (
              <>
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
              </>
            );

            return card.link ? (
              <Link
                key={index}
                to={card.link}
                className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 opacity-0 animate-fade-in hover:scale-[1.02]"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {CardContent}
              </Link>
            ) : (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-hover transition-shadow duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoCards;