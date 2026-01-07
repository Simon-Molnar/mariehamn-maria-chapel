import { Link } from "react-router-dom";
import { ArrowLeft, Drop, Cross, Heart, Users, HandHeart, Crown, Sparkle } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sakrament = () => {
  const sacraments = [
    {
      icon: Drop,
      title: "Dopet",
      description: "Dopet är porten till det kristna livet och till Guds rikes gemenskap. Genom dopet blir vi Guds barn och medlemmar i Kristi kropp, kyrkan. Både barn och vuxna kan döpas.",
      info: "Kontakta prästen för dopsamtal",
    },
    {
      icon: Cross,
      title: "Konfirmationen",
      description: "Konfirmationen fullbordar dopets nåd genom den Helige Andes gåva. Den konfirmerade stärks för att vittna om Kristus i ord och handling.",
      info: "Konfirmationsundervisning erbjuds årligen",
    },
    {
      icon: Sparkle,
      title: "Eukaristin (Nattvarden)",
      description: "Eukaristin är centrum i kyrkans liv. I nattvarden tar vi emot Kristi kropp och blod under brödets och vinets gestalter. Detta sakrament firas vid varje mässa.",
      info: "Firas vid varje gudstjänst",
    },
    {
      icon: Heart,
      title: "Försoningens sakrament (Bikten)",
      description: "Genom bikten får vi ta emot Guds förlåtelse för våra synder. Prästen lyssnar under absolut tystnadsplikt och förmedlar Guds barmhärtighet och nåd.",
      info: "Bikt efter överenskommelse med prästen",
    },
    {
      icon: HandHeart,
      title: "De sjukas smörjelse",
      description: "Detta sakrament ger tröst och styrka åt allvarligt sjuka. Prästen smörjer den sjuke med helig olja och ber för helande och frid.",
      info: "Kontakta prästen vid sjukdom",
    },
    {
      icon: Users,
      title: "Vigningens sakrament",
      description: "Genom vigningen ordineras biskopar, präster och diakoner för att tjäna kyrkan. De vigs till att förkunna Guds ord och förvalta sakramenten.",
      info: "Kallelse och utbildning genom stiftet",
    },
    {
      icon: Crown,
      title: "Äktenskapet",
      description: "Äktenskapet är ett förbund mellan man och kvinna inför Gud. Makarna ger sig åt varandra för livet och tar emot Guds välsignelse för sin gemenskap.",
      info: "Kontakta prästen för vigselsamtal",
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
              Sakramenten
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Sakramenten är heliga tecken instiftade av Kristus för att förmedla nåd. 
              Genom dem möter vi Gud på ett konkret och verkligt sätt.
            </p>
          </div>

          {/* Sacraments Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sacraments.map((sacrament, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <sacrament.icon size={28} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl text-foreground mb-3">
                      {sacrament.title}
                    </h2>
                    <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                      {sacrament.description}
                    </p>
                    <p className="font-body text-sm text-primary font-medium">
                      {sacrament.info}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Frågor om sakramenten?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Vill du veta mer om något sakrament eller förbereda dig för att ta emot ett? 
              Kontakta vår präst för ett personligt samtal.
            </p>
            <a 
              href="mailto:info@stgoran.ax" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Kontakta prästen
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sakrament;
