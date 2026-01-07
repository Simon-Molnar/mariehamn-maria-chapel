import { Link } from "react-router-dom";
import { ArrowLeft, Church, Calendar, Clock, MapPin, BookOpen, Heart, Cross, Star, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gudstjanster = () => {
  const sundayMasses = [
    { date: "12 januari 2026", day: "Söndag", time: "10:00", type: "Söndagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "19 januari 2026", day: "Söndag", time: "10:00", type: "Söndagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "26 januari 2026", day: "Söndag", time: "10:00", type: "Söndagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "2 februari 2026", day: "Söndag", time: "10:00", type: "Kyndelsmässan", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "9 februari 2026", day: "Söndag", time: "10:00", type: "Söndagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "16 februari 2026", day: "Söndag", time: "10:00", type: "Söndagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
  ];

  const weekdayMasses = [
    { date: "14 januari 2026", day: "Onsdag", time: "18:00", type: "Vardagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "21 januari 2026", day: "Onsdag", time: "18:00", type: "Vardagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "28 januari 2026", day: "Onsdag", time: "18:00", type: "Vardagsmässa", celebrant: "Stanisław Zawiłowicz (SCJ)" },
  ];

  const devotions = [
    { date: "15 januari 2026", day: "Torsdag", time: "17:30", type: "Rosenkransandakt", note: "Före vardagsmässan" },
    { date: "22 januari 2026", day: "Torsdag", time: "17:30", type: "Rosenkransandakt", note: "Före vardagsmässan" },
    { date: "22 februari 2026", day: "Söndag", time: "15:00", type: "Korsvägsandakt", note: "Fastetiden" },
    { date: "1 mars 2026", day: "Söndag", time: "15:00", type: "Korsvägsandakt", note: "Fastetiden" },
  ];

  const prayerHours = [
    { day: "Måndag–Fredag", time: "07:30", type: "Laudes (Morgonbön)", note: "Tidebönen" },
    { day: "Måndag–Fredag", time: "18:00", type: "Vesper (Aftonbön)", note: "Tidebönen" },
  ];

  const specialServices = [
    { date: "2 februari 2026", day: "Söndag", time: "10:00", type: "Kyndelsmässan", note: "Herrens frambärande i templet" },
    { date: "17 februari 2026", day: "Tisdag", time: "18:00", type: "Askonsdagen", note: "Fastans inledning" },
    { date: "5 april 2026", day: "Söndag", time: "10:00", type: "Palmsöndagen", note: "Stilla veckan inleds" },
    { date: "9 april 2026", day: "Torsdag", time: "18:00", type: "Skärtorsdagen", note: "Fottvagning och nattvard" },
    { date: "10 april 2026", day: "Fredag", time: "15:00", type: "Långfredagen", note: "Herrens lidande" },
    { date: "11 april 2026", day: "Lördag", time: "21:00", type: "Påskvaka", note: "Påskens stora natt" },
    { date: "12 april 2026", day: "Söndag", time: "10:00", type: "Påskdagen", note: "Kristi uppståndelse" },
  ];

  const serviceCategories = [
    {
      id: "sondagsmassa",
      label: "Söndagsmässa",
      icon: Church,
      description: "Söndagsmässan är församlingens huvudsakliga gudstjänst på Herrens dag.",
    },
    {
      id: "vardagsmassa",
      label: "Vardagsmässa",
      icon: Church,
      description: "Vardagsmässan firas på vardagar i enklare form.",
    },
    {
      id: "andakter",
      label: "Andakter",
      icon: Cross,
      description: "Rosenkransandakt och korsvägsandakt.",
    },
    {
      id: "tidebon",
      label: "Tidebön",
      icon: Heart,
      description: "Kyrkans gemensamma dagliga bön.",
    },
    {
      id: "hogtider",
      label: "Högtider",
      icon: Star,
      description: "Kyrkoårets stora högtider.",
    },
  ];

  const renderServiceTable = (services: Array<{ date?: string; day: string; time: string; type: string; celebrant?: string; note?: string }>, showCelebrant = false) => (
    <div className="bg-card rounded-xl shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              {services[0]?.date && <th className="px-6 py-4 text-left font-display text-sm text-foreground">Datum</th>}
              <th className="px-6 py-4 text-left font-display text-sm text-foreground">Dag</th>
              <th className="px-6 py-4 text-left font-display text-sm text-foreground">Tid</th>
              <th className="px-6 py-4 text-left font-display text-sm text-foreground">Typ</th>
              {showCelebrant && <th className="px-6 py-4 text-left font-display text-sm text-foreground hidden md:table-cell">Celebrant</th>}
              {services[0]?.note && !showCelebrant && <th className="px-6 py-4 text-left font-display text-sm text-foreground hidden md:table-cell">Anmärkning</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {services.map((service, index) => (
              <tr key={index} className="hover:bg-muted/30 transition-colors">
                {service.date && <td className="px-6 py-4 font-body text-foreground">{service.date}</td>}
                <td className="px-6 py-4 font-body text-muted-foreground">{service.day}</td>
                <td className="px-6 py-4 font-body text-foreground">{service.time}</td>
                <td className="px-6 py-4 font-body text-primary">{service.type}</td>
                {showCelebrant && <td className="px-6 py-4 font-body text-muted-foreground hidden md:table-cell">{service.celebrant}</td>}
                {service.note && !showCelebrant && <td className="px-6 py-4 font-body text-muted-foreground hidden md:table-cell">{service.note}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link 
            to="/gudstjanst-typer" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body">Tillbaka till gudstjänsttyper</span>
          </Link>

          {/* Hero section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Gudstjänstschema
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Här hittar du information om kommande gudstjänster, mässor, andakter och högtider i S:t Görans Kyrka.
            </p>
          </div>

          {/* Regular schedule info */}
          <div className="bg-card rounded-xl p-8 shadow-card mb-12 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl text-foreground mb-6 text-center">
              Ordinarie tider
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <span className="font-display text-lg text-foreground">Söndagar</span>
                <span className="font-body text-muted-foreground">Kl. 10:00 – Söndagsmässa</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <span className="font-display text-lg text-foreground">Onsdagar</span>
                <span className="font-body text-muted-foreground">Kl. 18:00 – Vardagsmässa</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <span className="font-display text-lg text-foreground">S:t Görans Kyrka</span>
                <span className="font-body text-muted-foreground">Norra Esplanadgatan 1</span>
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="sondagsmassa" className="w-full">
              <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted/50 p-2 rounded-xl mb-8">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="sondagsmassa" className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl text-foreground mb-2">Söndagsmässa</h2>
                  <p className="font-body text-muted-foreground">
                    Söndagsmässan är församlingens huvudsakliga gudstjänst på Herrens dag. Här samlas de troende kring Guds ord och firar den heliga eukaristin till åminnelse av Kristi uppståndelse.
                  </p>
                </div>
                {renderServiceTable(sundayMasses, true)}
              </TabsContent>

              <TabsContent value="vardagsmassa" className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl text-foreground mb-2">Vardagsmässa</h2>
                  <p className="font-body text-muted-foreground">
                    Vardagsmässan firas på vardagar i enklare form men med samma heliga eukaristi och nåd som på söndagen. Den ger möjlighet till regelbundet deltagande i kyrkans sakramentala liv.
                  </p>
                </div>
                {renderServiceTable(weekdayMasses, true)}
              </TabsContent>

              <TabsContent value="andakter" className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl text-foreground mb-2">Andakter</h2>
                  <p className="font-body text-muted-foreground">
                    Rosenkransen är en meditativ bön där de troende begrundar Kristi liv. Korsvägsandakten följer Herren Jesus på hans lidandes väg.
                  </p>
                </div>
                {renderServiceTable(devotions)}
              </TabsContent>

              <TabsContent value="tidebon" className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl text-foreground mb-2">Tidebön</h2>
                  <p className="font-body text-muted-foreground">
                    Tidebönen är kyrkans gemensamma dagliga bön, där församlingen förenar sig med hela kyrkan i lovsång, tacksägelse och förbön.
                  </p>
                </div>
                {renderServiceTable(prayerHours)}
              </TabsContent>

              <TabsContent value="hogtider" className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl text-foreground mb-2">Högtider</h2>
                  <p className="font-body text-muted-foreground">
                    Högtidsandakter firas i anslutning till kyrkoårets stora högtider och hjälper församlingen att leva med i kyrkans liturgiska rytm.
                  </p>
                </div>
                {renderServiceTable(specialServices)}
              </TabsContent>
            </Tabs>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Bikt erbjuds före mässan efter överenskommelse. Kontakta församlingen för mer information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/gudstjanst-typer" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body"
              >
                <BookOpen className="w-4 h-4" />
                Läs mer om gudstjänsttyperna
              </Link>
              <Link 
                to="/#kontakt" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body"
              >
                Kontakta oss för frågor
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gudstjanster;
