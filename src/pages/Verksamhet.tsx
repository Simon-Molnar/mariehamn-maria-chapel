import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verksamhetHero from "@/assets/verksamhet-hero.avif";

const Verksamhet = () => {
  const activities = [
    {
      title: "Söndagsskola",
      description: "Varje söndag under gudstjänsten samlas barnen för egen undervisning anpassad efter ålder. Genom berättelser, sånger och pyssel lär sig barnen om den kristna tron på ett lekfullt sätt."
    },
    {
      title: "Ungdomsgrupp",
      description: "Församlingens ungdomar träffas regelbundet för gemenskap, samtal om tro och liv, samt olika aktiviteter. En plats för unga att växa i sin tro tillsammans med jämnåriga."
    },
    {
      title: "Bibelstudium",
      description: "Gemensam läsning och fördjupning i Bibeln. Vi studerar tillsammans olika böcker och teman för att bättre förstå Guds ord och hur det kan tillämpas i våra liv."
    },
    {
      title: "Kyrkkaffe",
      description: "Efter söndagens gudstjänst samlas vi för kaffe och gemenskap. Ett tillfälle att lära känna varandra bättre och bygga relationer inom församlingen."
    },
    {
      title: "Kyrkokör",
      description: "Församlingens kör övar regelbundet och medverkar vid gudstjänster och högtider. Alla som vill sjunga är välkomna att delta, oavsett tidigare erfarenhet."
    },
    {
      title: "Diakoni",
      description: "Genom diakonin når vi ut till människor i behov. Vi besöker sjuka och äldre, samlar in till välgörenhet och stöttar de som behöver hjälp i vardagen."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} weight="light" />
            <span className="font-body">Tillbaka till startsidan</span>
          </Link>

          <div
            className="relative text-center mb-12 -mx-6 px-6 py-16 md:py-24 rounded-md overflow-hidden"
            style={{
              backgroundImage: `url(${verksamhetHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 65%'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
                Verksamhet
              </h1>
              <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
                Församlingen erbjuder en mängd olika aktiviteter för alla åldrar. 
                Här finns gemenskap, lärande och möjlighet att växa i tro tillsammans.
              </p>
            </div>
          </div>

          {/* Activities grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {activities.map((activity, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-card rounded-xl p-8 shadow-card max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Vill du delta?
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Alla är välkomna att delta i våra aktiviteter. Kontakta oss för mer information 
              eller kom bara förbi – vi tar gärna emot nya ansikten i vår gemenskap.
            </p>
            <a 
              href="mailto:info@stgoran.ax" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Kontakta oss
            </a>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Vi välkomnar alla att delta i våra aktiviteter och gemenskap.
            </p>
            <Link to="/gudstjanst-typer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body">
              Se våra gudstjänster
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Verksamhet;