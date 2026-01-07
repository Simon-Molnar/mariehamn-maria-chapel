import { Link } from "react-router-dom";
import { ArrowLeft, Users, Heart, BookOpen, Coffee, MusicNotes, Handshake } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Verksamhet = () => {
  const activities = [
    {
      icon: Users,
      title: "Söndagsskola",
      description: "Varje söndag under gudstjänsten samlas barnen för egen undervisning anpassad efter ålder. Genom berättelser, sånger och pyssel lär sig barnen om den kristna tron på ett lekfullt sätt.",
      time: "Söndagar under mässan",
    },
    {
      icon: Heart,
      title: "Ungdomsgrupp",
      description: "Församlingens ungdomar träffas regelbundet för gemenskap, samtal om tro och liv, samt olika aktiviteter. En plats för unga att växa i sin tro tillsammans med jämnåriga.",
      time: "Varannan fredag kl. 18:00",
    },
    {
      icon: BookOpen,
      title: "Bibelstudium",
      description: "Gemensam läsning och fördjupning i Bibeln. Vi studerar tillsammans olika böcker och teman för att bättre förstå Guds ord och hur det kan tillämpas i våra liv.",
      time: "Onsdagar kl. 19:00",
    },
    {
      icon: Coffee,
      title: "Kyrkkaffe",
      description: "Efter söndagens gudstjänst samlas vi för kaffe och gemenskap. Ett tillfälle att lära känna varandra bättre och bygga relationer inom församlingen.",
      time: "Söndagar efter mässan",
    },
    {
      icon: MusicNotes,
      title: "Kyrkokör",
      description: "Församlingens kör övar regelbundet och medverkar vid gudstjänster och högtider. Alla som vill sjunga är välkomna att delta, oavsett tidigare erfarenhet.",
      time: "Torsdagar kl. 18:30",
    },
    {
      icon: Handshake,
      title: "Diakoni",
      description: "Genom diakonin når vi ut till människor i behov. Vi besöker sjuka och äldre, samlar in till välgörenhet och stöttar de som behöver hjälp i vardagen.",
      time: "Löpande verksamhet",
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
              Verksamhet & Aktiviteter
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Församlingen erbjuder en mängd olika aktiviteter för alla åldrar. 
              Här finns gemenskap, lärande och möjlighet att växa i tro tillsammans.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <activity.icon size={28} weight="light" className="text-primary" />
                </div>
                <h2 className="font-display text-xl text-foreground mb-3">
                  {activity.title}
                </h2>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <p className="font-body text-sm text-primary font-medium">
                  {activity.time}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Vill du delta?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Alla är välkomna att delta i våra aktiviteter. Kontakta oss för mer information 
              eller kom bara förbi – vi tar gärna emot nya ansikten i vår gemenskap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@stgoran.ax" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
              >
                Kontakta oss
              </a>
              <Link 
                to="/gudstjanst-typer" 
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-lg font-body font-medium hover:bg-muted transition-colors"
              >
                Se våra gudstjänster
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Verksamhet;
