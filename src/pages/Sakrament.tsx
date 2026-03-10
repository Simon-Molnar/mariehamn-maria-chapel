import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sakramentHero from "@/assets/sakrament-hero.avif";

const Sakrament = () => {
  const sacraments = [
    {
      title: "Dopet",
      description: "Dopet är porten till det kristna livet och till Guds rikes gemenskap. Genom dopet blir vi Guds barn och medlemmar i Kristi kropp, kyrkan. Både barn och vuxna kan döpas."
    },
    {
      title: "Konfirmationen",
      description: "Konfirmationen fullbordar dopets nåd genom den Helige Andes gåva. Den konfirmerade stärks för att vittna om Kristus i ord och handling."
    },
    {
      title: "Eukaristin (Nattvarden)",
      description: "Eukaristin är centrum i kyrkans liv. I nattvarden tar vi emot Kristi kropp och blod under brödets och vinets gestalter. Detta sakrament firas vid varje mässa."
    },
    {
      title: "Försoningens sakrament (Bikten)",
      description: "Genom bikten får vi ta emot Guds förlåtelse för våra synder. Prästen lyssnar under absolut tystnadsplikt och förmedlar Guds barmhärtighet och nåd."
    },
    {
      title: "De sjukas smörjelse",
      description: "Detta sakrament ger tröst och styrka åt allvarligt sjuka. Prästen smörjer den sjuke med helig olja och ber för helande och frid."
    },
    {
      title: "Vigningens sakrament",
      description: "Genom vigningen ordineras biskopar, präster och diakoner för att tjäna kyrkan. De vigs till att förkunna Guds ord och förvalta sakramenten."
    },
    {
      title: "Äktenskapet",
      description: "Äktenskapet är ett förbund mellan man och kvinna inför Gud. Makarna ger sig åt varandra för livet och tar emot Guds välsignelse för sin gemenskap."
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
              backgroundImage: `url(${sakramentHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 48%'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="relative z-10">
              <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
                Sakrament
              </h1>
              <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
                Sakramenten är heliga tecken instiftade av Kristus för att förmedla nåd. 
                Genom dem möter vi Gud på ett konkret och verkligt sätt.
              </p>
            </div>
          </div>

          {/* Sacraments grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {sacraments.map((sacrament, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {sacrament.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {sacrament.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-card rounded-xl p-8 shadow-card max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Frågor om sakramenten?
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Vill du veta mer om något sakrament eller förbereda dig för att ta emot ett? 
              Kontakta vår präst för ett personligt samtal.
            </p>
            <a 
              href="mailto:info@mariehamnskatolskaforsamling.ax" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Kontakta prästen
            </a>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Alla sakrament firas i S:t Görans kyrka. 
              Kontakta prästen för sakramentsförberedelse.
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

export default Sakrament;