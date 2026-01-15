import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import butikHero from "@/assets/butik-hero.avif";

const Butik = () => {
  const products = [
    {
      title: "Böcker & Litteratur",
      description: "Andliga böcker, biblar, bönböcker och litteratur om katolsk tro och tradition. Perfekt för fördjupning i tron eller som gåva."
    },
    {
      title: "Ljus & Votivoffer",
      description: "Kyrkobruksljus, votivoffer och ljuslyktor för bön och andakt i hemmet. Tända ljus som en symbol för bön och hopp."
    },
    {
      title: "Rosenkransar",
      description: "Vackra rosenkransar i olika material och stilar. Ett centralt hjälpmedel för den katolska bönetraditionen."
    },
    {
      title: "Ikoner & Religiös Konst",
      description: "Heliga bilder, ikoner och religiös konst för hemmet. Konstverk som påminner om trons skönhet och helighet."
    },
    {
      title: "Dopgåvor & Konfirmation",
      description: "Meningsfulla gåvor för dop, första kommunion och konfirmation. Smycken, böcker och minnessaker."
    },
    {
      title: "Devotionalia",
      description: "Kors, krucifix, helgonmedaljer och andra andaktsföremål som stöd för det dagliga bönelivet."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-b-md"
            style={{
              backgroundImage: `url(${butikHero})`,
              backgroundPosition: '70% 30%'
            }}
          />
          <div className="absolute inset-0 bg-foreground/60 rounded-b-md" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Butik
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Böcker, andaktsföremål och gåvor som stöder det andliga livet
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Vår församlingsbutik erbjuder ett urval av böcker, andaktsföremål och religiösa gåvor. 
              Intäkterna går till att stödja församlingens verksamhet och välgörenhetsprojekt. 
              Besök butiken i samband med gudstjänster eller kontakta oss för att beställa.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 px-6 pb-24">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow"
                >
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <h2 className="font-display text-2xl text-foreground mb-4">
                Besök eller beställ
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Butiken är öppen i samband med söndagens mässa. Du kan även kontakta oss för att höra om tillgänglighet eller för att göra en beställning.
              </p>
              <a 
                href="mailto:info@stgoran.ax" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Butik;
