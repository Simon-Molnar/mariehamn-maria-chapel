import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gudstjanstHero from "@/assets/gudstjanst-hero.avif";

const GudstjanstTyper = () => {
  const serviceTypes = [
    {
      title: "Söndagsmässa",
      description: "Söndagsmässan är församlingens huvudsakliga gudstjänst på Herrens dag. Här samlas de troende kring Guds ord och firar den heliga eukaristin till åminnelse av Kristi uppståndelse."
    },
    {
      title: "Vardagsmässa",
      description: "Vardagsmässan firas på vardagar i enklare form men med samma heliga eukaristi och nåd som på söndagen. Den ger möjlighet till regelbundet deltagande i kyrkans sakramentala liv."
    },
    {
      title: "Ordets gudstjänst",
      description: "Ordets gudstjänst är en samling där Guds ord står i centrum genom bibelläsningar, predikan och gemensam förbön, utan firande av eukaristin."
    },
    {
      title: "Tidebön",
      description: "Tidebönen är kyrkans gemensamma dagliga bön, där församlingen förenar sig med hela kyrkan i lovsång, tacksägelse och förbön."
    },
    {
      title: "Rosenkransandakt",
      description: "Rosenkransen är en meditativ bön där de troende, tillsammans med Jungfru Maria, begrundar Kristi liv, lidande och härlighet."
    },
    {
      title: "Korsvägsandakt",
      description: "Korsvägsandakten är en andakt där församlingen i bön följer Herren Jesus Kristus på hans lidandes väg, särskilt under fastetiden."
    },
    {
      title: "Eukaristisk tillbedjan",
      description: "Eukaristisk tillbedjan är en stund av stillhet och bön inför den heliga eukaristin, i vördnadsfull tillbedjan av Kristus själv."
    },
    {
      title: "Högtidsandakter",
      description: "Högtidsandakter firas i anslutning till kyrkoårets stora högtider och hjälper församlingen att leva med i kyrkans liturgiska rytm."
    }
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
              backgroundImage: `url(${gudstjanstHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 70%'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
                Gudstjänster
              </h1>
              <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
                I S:t Görans Kyrka firas olika typer av gudstjänster och andakter genom året.
                Här kan du läsa mer om de olika gudstjänsterna.
              </p>
            </div>
          </div>

          {/* Service types grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Link to schedule */}
          <div className="bg-card rounded-xl p-8 shadow-card max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Ordinarie mässtider
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Se våra kommande gudstjänster med datum, tider och celebranter.
            </p>
            <Link to="/gudstjanster" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors">
              Visa kommande gudstjänster
            </Link>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Alla är välkomna att delta i våra gudstjänster. 
              Har du frågor om något av sakramenten, kontakta oss gärna.
            </p>
            <Link to="/#kontakt" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body">
              Kontakta oss för mer information
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GudstjanstTyper;
