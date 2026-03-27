import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, BookOpen, Funnel } from "@phosphor-icons/react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
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
      <PageHero
        title="Gudstjänstkalender"
        description="Alla kommande gudstjänster, mässor, andakter och högtider i S:t Görans Kyrka."
      />

      {/* Regular schedule */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-card rounded-xl p-8 lg:p-10 shadow-card text-center">
            <Calendar size={36} weight="light" className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">Söndagar</h3>
            <p className="font-body text-muted-foreground">Kl. 10:00 – Söndagsmässa</p>
          </div>
          <div className="bg-card rounded-xl p-8 lg:p-10 shadow-card text-center">
            <Clock size={36} weight="light" className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">Onsdagar</h3>
            <p className="font-body text-muted-foreground">Kl. 18:00 – Vardagsmässa</p>
          </div>
          <div className="bg-card rounded-xl p-8 lg:p-10 shadow-card text-center">
            <MapPin size={36} weight="light" className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">S:t Görans Kyrka</h3>
            <p className="font-body text-muted-foreground">Östra Esplanadgatan 6</p>
          </div>
        </div>
      </Section>

      {/* Filter + Table */}
      <Section bg="secondary">
        <div className="mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Funnel size={18} weight="light" />
              <span className="font-body text-sm font-medium">Filtrera:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-body text-sm transition-colors ${
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
                  <th className="px-5 md:px-8 py-5 text-left font-display text-sm text-foreground">Datum</th>
                  <th className="px-5 md:px-8 py-5 text-left font-display text-sm text-foreground hidden sm:table-cell">Dag</th>
                  <th className="px-5 md:px-8 py-5 text-left font-display text-sm text-foreground">Tid</th>
                  <th className="px-5 md:px-8 py-5 text-left font-display text-sm text-foreground">Gudstjänst</th>
                  <th className="px-5 md:px-8 py-5 text-left font-display text-sm text-foreground hidden lg:table-cell">Kategori</th>
                  <th className="px-5 md:px-8 py-5 text-left font-display text-sm text-foreground hidden md:table-cell">Info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredServices.map((service, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 md:px-8 py-5 font-body text-foreground whitespace-nowrap">{service.date}</td>
                    <td className="px-5 md:px-8 py-5 font-body text-muted-foreground hidden sm:table-cell">{service.day}</td>
                    <td className="px-5 md:px-8 py-5 font-body text-foreground">{service.time}</td>
                    <td className="px-5 md:px-8 py-5 font-body text-primary font-medium">{service.type}</td>
                    <td className="px-5 md:px-8 py-5 hidden lg:table-cell">
                      <Badge className={categoryColors[service.category]}>
                        {service.category}
                      </Badge>
                    </td>
                    <td className="px-5 md:px-8 py-5 font-body text-muted-foreground hidden md:table-cell">
                      {service.celebrant || service.note || "–"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredServices.length === 0 && (
            <div className="p-12 text-center text-muted-foreground font-body">
              Inga gudstjänster i denna kategori just nu.
            </div>
          )}
        </div>
      </Section>

      {/* Bottom links */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground mb-6 text-lg">
            Bikt erbjuds före mässan efter överenskommelse. Kontakta församlingen för mer information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/gudstjanst-typer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body font-medium"
            >
              <BookOpen size={18} weight="light" />
              Läs mer om gudstjänsttyperna
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body font-medium"
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
