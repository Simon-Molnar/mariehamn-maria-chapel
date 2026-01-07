import { Link } from "react-router-dom";
import { ArrowLeft, Church, Globe, Heart, Users } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OmOss = () => {
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
              Om församlingen
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Mariehamns katolska församling är en del av den världsvida Katolska kyrkan 
              och tillhör Helsingfors katolska stift.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* About Text */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Church size={24} weight="light" className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">Vår historia</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  S:t Görans kyrka i Mariehamn har tjänat den katolska gemenskapen på Åland sedan 
                  församlingen grundades. Kyrkan är uppkallad efter den helige Georg, skyddshelgon 
                  för riddare och soldater.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Församlingen välkomnar alla som söker gemenskap i den katolska tron – 
                  praktiserande katoliker, de som söker sig tillbaka till kyrkan, 
                  och alla som vill lära känna den katolska tron.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe size={24} weight="light" className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">Del av världskyrkan</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Som en del av Helsingfors katolska stift står församlingen i gemenskap med 
                  den världsvida Katolska kyrkan under påvens ledning. Kyrkan firar samma mässa 
                  och delar samma tro som katoliker över hela världen.
                </p>
              </div>
            </div>

            {/* Values & Mission */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart size={24} weight="light" className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">Vårt uppdrag</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Församlingens uppdrag är att fira mässa, förvalta sakramenten, förkunna evangeliet 
                  och bygga en levande gemenskap kring Kristus. Genom bön, undervisning och diakoni 
                  strävar församlingen efter att vara en plats för möte med Gud.
                </p>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Regelbunden mässa och sakramentsförvaltning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Undervisning och katekesverksamhet
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Gemenskap för alla åldrar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Diakoni och omsorg om nästan
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users size={24} weight="light" className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">Gemenskap</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Församlingen är en gemenskap där människor i alla åldrar och från olika bakgrunder 
                  möts kring Kristus. Efter söndagens mässa samlas församlingen till kyrkkaffe för 
                  umgänge och gemenskap. Alla är välkomna att delta.
                </p>
              </div>
            </div>
          </div>

          {/* Stift Info */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Helsingfors katolska stift
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Församlingen tillhör Helsingfors katolska stift som omfattar hela Finland. 
              Stiftet leds av biskopen av Helsingfors och samlar katoliker från hela landet.
            </p>
            <a 
              href="https://katolinen.fi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Besök stiftets webbplats
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OmOss;
