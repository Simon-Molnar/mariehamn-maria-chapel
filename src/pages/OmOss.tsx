import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gudstjanstHero from "@/assets/gudstjanst-hero.avif";

const OmOss = () => {
  const sections = [
    {
      title: "Vår historia",
      description: "S:t Görans kyrka i Mariehamn har tjänat den katolska gemenskapen på Åland sedan församlingen grundades. Kyrkan är uppkallad efter den helige Georg, skyddshelgon för riddare och soldater."
    },
    {
      title: "Del av världskyrkan",
      description: "Som en del av Helsingfors katolska stift står församlingen i gemenskap med den världsvida Katolska kyrkan under påvens ledning. Kyrkan firar samma mässa och delar samma tro som katoliker över hela världen."
    },
    {
      title: "Vårt uppdrag",
      description: "Församlingens uppdrag är att fira mässa, förvalta sakramenten, förkunna evangeliet och bygga en levande gemenskap kring Kristus. Genom bön, undervisning och diakoni strävar vi efter att vara en plats för möte med Gud."
    },
    {
      title: "Gemenskap",
      description: "Församlingen är en gemenskap där människor i alla åldrar och från olika bakgrunder möts kring Kristus. Efter söndagens mässa samlas församlingen till kyrkkaffe för umgänge och gemenskap. Alla är välkomna att delta."
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
              backgroundImage: `url(${gudstjanstHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 70%'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
                Om församlingen
              </h1>
              <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
                Mariehamns katolska församling är en del av den världsvida Katolska kyrkan 
                och tillhör Helsingfors katolska stift.
              </p>
            </div>
          </div>

          {/* Sections grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {section.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stift Info */}
          <div className="bg-card rounded-xl p-8 shadow-card max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Helsingfors katolska stift
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Församlingen tillhör Helsingfors katolska stift som omfattar hela Finland. 
              Stiftet leds av biskopen av Helsingfors och samlar katoliker från hela landet.
            </p>
            <a 
              href="https://katolinen.fi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Besök stiftets webbplats
            </a>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Församlingen välkomnar alla som söker gemenskap i den katolska tron.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body">
              Kontakta oss för mer information
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OmOss;