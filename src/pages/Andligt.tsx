import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Flame, Heart, Moon, Sun, HandsPraying } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Andligt = () => {
  const spiritualLife = [
    {
      icon: HandsPraying,
      title: "Bön",
      description: "Bönen är hjärtat i det kristna livet. Genom bön talar vi med Gud, lyssnar till hans röst och fördjupar vår relation med honom. Kyrkan erbjuder olika böneformer och traditioner.",
      practices: ["Personlig bön", "Tidegärden", "Rosenkransen", "Adorationen"],
    },
    {
      icon: BookOpen,
      title: "Andlig läsning",
      description: "Genom att läsa Bibeln och andlig litteratur fördjupar vi vår förståelse av tron. Lectio Divina är en beprövad metod för meditativ bibelläsning.",
      practices: ["Bibelläsning", "Lectio Divina", "Helgonbiografier", "Kyrkofäderna"],
    },
    {
      icon: Flame,
      title: "Andlig vägledning",
      description: "En andlig vägledare kan hjälpa dig att urskilja Guds vilja och växa i ditt andliga liv. Detta är en personlig resa med stöd av en erfaren medvandrare.",
      practices: ["Enskilda samtal", "Retreater", "Exericitierna"],
    },
    {
      icon: Moon,
      title: "Kontemplation & Tystnad",
      description: "I tystnaden kan vi möta Gud på ett djupare sätt. Kontemplativ bön handlar om att vila i Guds närvaro utan ord.",
      practices: ["Tyst bön", "Meditation", "Kontemplation"],
    },
    {
      icon: Sun,
      title: "Kyrkans högtider",
      description: "Kyrkoåret med dess högtider hjälper oss att leva i Kristi mysterium. Advent, jul, fastan, påsk och pingst formar vårt andliga liv.",
      practices: ["Advent", "Jultiden", "Fastan", "Påsktiden"],
    },
    {
      icon: Heart,
      title: "Kärlekens gärningar",
      description: "Det andliga livet uttrycks också genom praktisk kärlek till nästan. Barmhärtighetshandlingar är en del av vårt svar på Guds kärlek.",
      practices: ["Diakoni", "Välgörenhet", "Omsorg om skapelsen"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-body"
          >
            <ArrowLeft size={16} weight="light" />
            Tillbaka till startsidan
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Andligt liv
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Det andliga livet handlar om vår relation med Gud och hur vi växer i tro, hopp och kärlek. 
              Här finns resurser och vägledning för din andliga resa.
            </p>
          </div>

          {/* Spiritual Life Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {spiritualLife.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon size={28} weight="light" className="text-primary" />
                </div>
                <h2 className="font-display text-xl text-foreground mb-3">
                  {item.title}
                </h2>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.practices.map((practice, i) => (
                    <span 
                      key={i}
                      className="text-xs font-body bg-muted text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Daily Prayer Section */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-12 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl text-foreground mb-4">
                Dagens bön
              </h2>
              <blockquote className="font-body text-lg text-muted-foreground italic mb-6 leading-relaxed">
                "Herre, gör mig till ett redskap för din frid. Låt mig bringa kärlek där hat finns, 
                förlåtelse där oförrätt finns, enighet där oenighet finns, tro där tvivel finns, 
                hopp där förtvivlan finns, ljus där mörker finns, glädje där sorg finns."
              </blockquote>
              <p className="font-body text-sm text-muted-foreground">
                — Fransiskus av Assisi
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-card rounded-xl p-8 md:p-12 text-center shadow-card">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Sök andlig vägledning
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Vill du ha stöd på din andliga resa? Vår präst finns tillgänglig för samtal om tro, 
              bön och livets stora frågor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@stgoran.ax" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
              >
                Boka samtal
              </a>
              <Link 
                to="/sakrament" 
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-lg font-body font-medium hover:bg-muted transition-colors"
              >
                Läs om sakramenten
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Andligt;
