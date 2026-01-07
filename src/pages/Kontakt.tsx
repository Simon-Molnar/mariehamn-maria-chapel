import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Envelope, Clock, FacebookLogo, Cross } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Kontakt = () => {
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
              Kontakta oss
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Församlingen välkomnar alla att ta kontakt. Oavsett om det gäller 
              frågor om tron, sakramenten eller verksamheten – tveka inte att höra av dig.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin size={28} weight="light" className="text-primary" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-3">Adress</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                S:t Görans kyrka<br />
                Kaptensgatan 6<br />
                22100 Mariehamn<br />
                Åland, Finland
              </p>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={28} weight="light" className="text-primary" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-3">Telefon</h2>
              <p className="font-body text-muted-foreground mb-4">
                Kontakta prästen för samtal om sakrament, andlig vägledning eller andra frågor.
              </p>
              <a 
                href="tel:+35818123456" 
                className="font-body text-primary hover:text-primary/80 transition-colors"
              >
                +358 18 123 456
              </a>
            </div>

            {/* Email */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Envelope size={28} weight="light" className="text-primary" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-3">E-post</h2>
              <p className="font-body text-muted-foreground mb-4">
                Skicka ett meddelande så återkommer församlingen så snart som möjligt.
              </p>
              <a 
                href="mailto:info@stgoran.ax" 
                className="font-body text-primary hover:text-primary/80 transition-colors"
              >
                info@stgoran.ax
              </a>
            </div>

            {/* Opening Hours */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock size={28} weight="light" className="text-primary" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-3">Öppettider</h2>
              <div className="font-body text-muted-foreground space-y-2">
                <p><span className="text-foreground">Söndag:</span> 09:30 – 12:00</p>
                <p><span className="text-foreground">Mässa:</span> Söndagar kl. 10:00</p>
                <p className="text-sm pt-2">
                  Kyrkan är öppen i samband med gudstjänster. 
                  Kontakta prästen för besök vid andra tider.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <FacebookLogo size={28} weight="light" className="text-primary" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-3">Sociala medier</h2>
              <p className="font-body text-muted-foreground mb-4">
                Följ församlingen på Facebook för nyheter, bilder och uppdateringar.
              </p>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-primary hover:text-primary/80 transition-colors"
              >
                Facebook
              </a>
            </div>

            {/* Priest */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Cross size={28} weight="light" className="text-primary" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-3">Präst</h2>
              <p className="font-body text-muted-foreground mb-4">
                Församlingens präst finns tillgänglig för samtal om tro, bikt, 
                sjukkommunion och andra pastorala ärenden.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Kontakta via telefon eller e-post för att boka tid.
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Hitta hit
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              S:t Görans kyrka ligger centralt i Mariehamn, nära hamnen. 
              Parkering finns tillgänglig i närheten.
            </p>
            <div className="aspect-video max-w-3xl mx-auto bg-muted rounded-lg flex items-center justify-center">
              <p className="font-body text-muted-foreground">
                Kaptensgatan 6, 22100 Mariehamn
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
