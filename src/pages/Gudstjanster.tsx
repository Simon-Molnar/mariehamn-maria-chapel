import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, BookOpen, Funnel } from "@phosphor-icons/react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

type ServiceCategory = "Söndagsmässa" | "Vardagsmässa" | "Andakt" | "Tidebön" | "Högtid";

interface Service {
  date: string;
  sortDate: string;
  day: string;
  time: string;
  type: string;
  category: ServiceCategory;
  celebrant?: string;
  note?: string;
}

const categoryColors: Record<ServiceCategory, string> = {
  "Söndagsmässa": "bg-primary text-primary-foreground",
  "Vardagsmässa": "bg-secondary text-secondary-foreground",
  "Andakt": "bg-accent text-accent-foreground",
  "Tidebön": "bg-muted text-muted-foreground",
  "Högtid": "bg-primary/80 text-primary-foreground",
};

const Gudstjanster = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "Alla">("Alla");

  const allServices: Service[] = ([
    { date: "12 januari 2026", sortDate: "2026-01-12", day: "Söndag", time: "10:00", type: "Söndagsmässa", category: "Söndagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "19 januari 2026", sortDate: "2026-01-19", day: "Söndag", time: "10:00", type: "Söndagsmässa", category: "Söndagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "26 januari 2026", sortDate: "2026-01-26", day: "Söndag", time: "10:00", type: "Söndagsmässa", category: "Söndagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "9 februari 2026", sortDate: "2026-02-09", day: "Söndag", time: "10:00", type: "Söndagsmässa", category: "Söndagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "16 februari 2026", sortDate: "2026-02-16", day: "Söndag", time: "10:00", type: "Söndagsmässa", category: "Söndagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "14 januari 2026", sortDate: "2026-01-14", day: "Onsdag", time: "18:00", type: "Vardagsmässa", category: "Vardagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "21 januari 2026", sortDate: "2026-01-21", day: "Onsdag", time: "18:00", type: "Vardagsmässa", category: "Vardagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "28 januari 2026", sortDate: "2026-01-28", day: "Onsdag", time: "18:00", type: "Vardagsmässa", category: "Vardagsmässa" as ServiceCategory, celebrant: "Stanisław Zawiłowicz (SCJ)" },
    { date: "15 januari 2026", sortDate: "2026-01-15", day: "Torsdag", time: "17:30", type: "Rosenkransandakt", category: "Andakt" as ServiceCategory, note: "Före vardagsmässan" },
    { date: "22 januari 2026", sortDate: "2026-01-22", day: "Torsdag", time: "17:30", type: "Rosenkransandakt", category: "Andakt" as ServiceCategory, note: "Före vardagsmässan" },
    { date: "22 februari 2026", sortDate: "2026-02-22", day: "Söndag", time: "15:00", type: "Korsvägsandakt", category: "Andakt" as ServiceCategory, note: "Fastetiden" },
    { date: "1 mars 2026", sortDate: "2026-03-01", day: "Söndag", time: "15:00", type: "Korsvägsandakt", category: "Andakt" as ServiceCategory, note: "Fastetiden" },
    { date: "2 februari 2026", sortDate: "2026-02-02", day: "Söndag", time: "10:00", type: "Kyndelsmässan", category: "Högtid" as ServiceCategory, note: "Herrens frambärande i templet" },
    { date: "18 februari 2026", sortDate: "2026-02-18", day: "Onsdag", time: "18:00", type: "Askonsdagen", category: "Högtid" as ServiceCategory, note: "Fastans inledning" },
    { date: "5 april 2026", sortDate: "2026-04-05", day: "Söndag", time: "10:00", type: "Palmsöndagen", category: "Högtid" as ServiceCategory, note: "Stilla veckan inleds" },
    { date: "9 april 2026", sortDate: "2026-04-09", day: "Torsdag", time: "18:00", type: "Skärtorsdagen", category: "Högtid" as ServiceCategory, note: "Fottvagning och nattvard" },
    { date: "10 april 2026", sortDate: "2026-04-10", day: "Fredag", time: "15:00", type: "Långfredagen", category: "Högtid" as ServiceCategory, note: "Herrens lidande" },
    { date: "11 april 2026", sortDate: "2026-04-11", day: "Lördag", time: "21:00", type: "Påskvaka", category: "Högtid" as ServiceCategory, note: "Påskens stora natt" },
    { date: "12 april 2026", sortDate: "2026-04-12", day: "Söndag", time: "10:00", type: "Påskdagen", category: "Högtid" as ServiceCategory, note: "Kristi uppståndelse" },
  ] as Service[]).sort((a, b) => a.sortDate.localeCompare(b.sortDate));

  const categories: Array<ServiceCategory | "Alla"> = ["Alla", "Söndagsmässa", "Vardagsmässa", "Andakt", "Tidebön", "Högtid"];

  const filteredServices = selectedCategory === "Alla"
    ? allServices
    : allServices.filter(s => s.category === selectedCategory);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Calendar size={40} weight="light" className="text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Gudstjänstkalender
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alla kommande gudstjänster, mässor, andakter och högtider i S:t Görans Kyrka.
          </p>
        </div>
      </section>

      {/* Regular schedule */}
      <Section>
        <div className="bg-card rounded-xl p-8 md:p-10 shadow-card max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 text-center">
            Ordinarie tider
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar size={32} weight="light" className="text-primary mb-3" />
              <span className="font-display text-lg text-foreground">Söndagar</span>
              <span className="font-body text-muted-foreground">Kl. 10:00 – Söndagsmässa</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock size={32} weight="light" className="text-primary mb-3" />
              <span className="font-display text-lg text-foreground">Onsdagar</span>
              <span className="font-body text-muted-foreground">Kl. 18:00 – Vardagsmässa</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={32} weight="light" className="text-primary mb-3" />
              <span className="font-display text-lg text-foreground">S:t Görans Kyrka</span>
              <span className="font-body text-muted-foreground">Östra Esplanadgatan 6</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Filter + Table */}
      <Section bg="secondary">
        <div className="mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Funnel size={16} weight="light" />
              <span className="font-body text-sm">Filtrera:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-body text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-muted text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-sm text-foreground">Datum</th>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-sm text-foreground hidden sm:table-cell">Dag</th>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-sm text-foreground">Tid</th>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-sm text-foreground">Gudstjänst</th>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-sm text-foreground hidden lg:table-cell">Kategori</th>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-sm text-foreground hidden md:table-cell">Info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredServices.map((service, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 md:px-6 py-4 font-body text-foreground whitespace-nowrap">{service.date}</td>
                    <td className="px-4 md:px-6 py-4 font-body text-muted-foreground hidden sm:table-cell">{service.day}</td>
                    <td className="px-4 md:px-6 py-4 font-body text-foreground">{service.time}</td>
                    <td className="px-4 md:px-6 py-4 font-body text-primary font-medium">{service.type}</td>
                    <td className="px-4 md:px-6 py-4 hidden lg:table-cell">
                      <Badge className={categoryColors[service.category]}>
                        {service.category}
                      </Badge>
                    </td>
                    <td className="px-4 md:px-6 py-4 font-body text-muted-foreground hidden md:table-cell">
                      {service.celebrant || service.note || "–"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredServices.length === 0 && (
            <div className="p-8 text-center text-muted-foreground font-body">
              Inga gudstjänster i denna kategori just nu.
            </div>
          )}
        </div>
      </Section>

      {/* Bottom links */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-body text-muted-foreground mb-4">
            Bikt erbjuds före mässan efter överenskommelse. Kontakta församlingen för mer information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/gudstjanst-typer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body"
            >
              <BookOpen size={16} weight="light" />
              Läs mer om gudstjänsttyperna
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body"
            >
              Kontakta oss för frågor
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Gudstjanster;
