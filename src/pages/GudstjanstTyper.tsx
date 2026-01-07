import { Link } from "react-router-dom";
import { ArrowLeft, Church, Cross, Heart, Star, BookOpen, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const GudstjanstTyper = () => {
  const serviceTypes = [{
    icon: Church,
    title: "Heliga mässan",
    description: "Söndagsmässa, vardagsmässa"
  }, {
    icon: BookOpen,
    title: "Ordets gudstjänst",
    description: "Bibelläsningar, predikan, förbön utan eukaristi"
  }, {
    icon: Heart,
    title: "Tidebön",
    description: "Morgonbön (laudes), aftonbön (vesper)"
  }, {
    icon: Cross,
    title: "Andakter",
    description: "Rosenkrans, korsvägsandakt, särskilda högtidsandakter"
  }, {
    icon: Star,
    title: "Tillbedjan",
    description: "Eukaristisk tillbedjan (vid tillfälle)"
  }, {
    icon: Users,
    title: "Högtider",
    description: "Firande av kyrkoårets högtider"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body">Tillbaka till startsidan</span>
          </Link>

          {/* Hero section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Church className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Gudstjänster
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">I S:t Görans Kyrka firas olika typer av gudstjänster och andakter genom året.
Här kan du läsa mer om de olika gudstjänsterna.</p>
          </div>

          {/* Service types grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {serviceTypes.map((service, index) => <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
                <div className="w-14 h-14 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>)}
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
    </div>;
};
export default GudstjanstTyper;