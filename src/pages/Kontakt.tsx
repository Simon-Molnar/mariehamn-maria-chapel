import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import kontaktHero from "@/assets/kontakt-hero.avif";

const Kontakt = () => {
  const contactInfo = [
    {
      title: "Adress",
      description: "S:t Görans kyrka, Kaptensgatan 6, 22100 Mariehamn, Åland, Finland"
    },
    {
      title: "Telefon",
      description: "Kontakta prästen för samtal om sakrament, andlig vägledning eller andra frågor. Ring +358 18 123 456."
    },
    {
      title: "E-post",
      description: "Skicka ett meddelande till info@stgoran.ax så återkommer församlingen så snart som möjligt."
    },
    {
      title: "Öppettider",
      description: "Kyrkan är öppen måndag–lördag kl. 09:00–18:00 samt söndagar kl. 09:00–13:00. Välkommen in för bön och stilla reflektion."
    },
    {
      title: "Sociala medier",
      description: "Följ församlingen på Facebook för nyheter, bilder och uppdateringar om verksamheten."
    },
    {
      title: "Prästen",
      description: "Församlingens präst finns tillgänglig för samtal om tro, bikt, sjukkommunion och andra pastorala ärenden. Kontakta via telefon eller e-post."
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
              backgroundImage: `url(${kontaktHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 70%'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
                Kontakta oss
              </h1>
              <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
                Församlingen välkomnar alla att ta kontakt. Oavsett om det gäller 
                frågor om tron, sakramenten eller verksamheten – tveka inte att höra av dig.
              </p>
            </div>
          </div>

          {/* Contact grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-card rounded-xl p-8 shadow-card max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Hitta hit
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              S:t Görans kyrka ligger centralt i Mariehamn, nära hamnen. 
              Parkering finns tillgänglig i närheten.
            </p>
            <div className="aspect-video max-w-2xl mx-auto bg-muted rounded-lg flex items-center justify-center">
              <p className="font-body text-muted-foreground">
                Kaptensgatan 6, 22100 Mariehamn
              </p>
            </div>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Alla är välkomna att besöka S:t Görans kyrka.
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

export default Kontakt;