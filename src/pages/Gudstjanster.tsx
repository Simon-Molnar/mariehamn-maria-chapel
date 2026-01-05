import { Link } from "react-router-dom";
import { ArrowLeft, Church, Calendar, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gudstjanster = () => {
  const upcomingServices = [
    { date: "12 januari 2026", day: "Söndag", time: "10:00", type: "Högmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "19 januari 2026", day: "Söndag", time: "10:00", type: "Högmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "26 januari 2026", day: "Söndag", time: "10:00", type: "Högmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "2 februari 2026", day: "Söndag", time: "10:00", type: "Kyndelsmässan", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "9 februari 2026", day: "Söndag", time: "10:00", type: "Högmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "16 februari 2026", day: "Söndag", time: "10:00", type: "Högmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
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
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Välkommen att fira mässa med oss. Här hittar du information om kommande gudstjänster i S:t Görans Kyrka.
            </p>
          </div>

          {/* Regular schedule info */}
          <div className="bg-card rounded-xl p-8 shadow-card mb-12 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl text-foreground mb-6 text-center">
              Ordinarie mässtider
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <span className="font-display text-lg text-foreground">Söndagar</span>
                <span className="font-body text-muted-foreground">Varje vecka</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <span className="font-display text-lg text-foreground">Kl. 10:00</span>
                <span className="font-body text-muted-foreground">Högmässa</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <span className="font-display text-lg text-foreground">S:t Görans Kyrka</span>
                <span className="font-body text-muted-foreground">Norra Esplanadgatan 1</span>
              </div>
            </div>
          </div>

          {/* Upcoming services */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl text-foreground mb-6 text-center">
              Kommande gudstjänster
            </h2>
            <div className="bg-card rounded-xl shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-display text-sm text-foreground">Datum</th>
                      <th className="px-6 py-4 text-left font-display text-sm text-foreground">Dag</th>
                      <th className="px-6 py-4 text-left font-display text-sm text-foreground">Tid</th>
                      <th className="px-6 py-4 text-left font-display text-sm text-foreground">Typ</th>
                      <th className="px-6 py-4 text-left font-display text-sm text-foreground hidden md:table-cell">Celebrant</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {upcomingServices.map((service, index) => (
                      <tr key={index} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 font-body text-foreground">{service.date}</td>
                        <td className="px-6 py-4 font-body text-muted-foreground">{service.day}</td>
                        <td className="px-6 py-4 font-body text-foreground">{service.time}</td>
                        <td className="px-6 py-4 font-body text-primary">{service.type}</td>
                        <td className="px-6 py-4 font-body text-muted-foreground hidden md:table-cell">{service.celebrant}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Bikt erbjuds före mässan efter överenskommelse. Kontakta församlingen för mer information.
            </p>
            <Link 
              to="/#kontakt" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body"
            >
              Kontakta oss för frågor
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gudstjanster;
