import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import kontaktHero from "@/assets/kontakt-hero.avif";

const Kontakt = () => {
  const contactInfo = [
    {
      title: "Adress",
      description: "S:t Görans kyrka, Östra Esplanadgatan 6, 22100 Mariehamn, Åland",
    },
    {
      title: "Telefon",
      description: "Kontakta prästen för samtal om sakrament, andlig vägledning eller andra frågor. Ring +358 18 12345.",
    },
    {
      title: "E-post",
      description: "Skicka ett meddelande till info@mariehamnskatolskaforsamling.ax så återkommer en representant från församlingen så snart som möjligt.",
    },
    {
      title: "Öppettider",
      description: "Måndag–lördag: 09:00–18:00\nSöndag: 09:00–13:00\n\nVälkommen in för bön och stilla reflektion.",
    },
    {
      title: "Sociala medier",
      description: "Följ församlingen på Facebook för nyheter, bilder och uppdateringar om verksamheten.",
    },
    {
      title: "Prästen",
      description: "Församlingens präst finns tillgänglig för samtal om tro, bikt, sjukkommunion och andra pastorala ärenden. Kontakta via telefon eller e-post.",
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Kontakta oss"
        description="Församlingen välkomnar alla att ta kontakt. Oavsett om det gäller frågor om tron, sakramenten eller verksamheten – tveka inte att höra av dig."
        image={kontaktHero}
        imagePosition="center 70%"
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-card rounded-xl p-8 lg:p-10 shadow-card hover:shadow-hover transition-shadow">
              <h3 className="font-display text-xl text-foreground mb-4">
                {info.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Map Section */}
      <Section bg="secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Hitta hit
          </h2>
          <p className="font-body text-muted-foreground mb-10 text-lg">
            S:t Görans kyrka ligger centralt i Mariehamn, nära hamnen.
            Parkering finns tillgänglig i närheten.
          </p>
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <p className="font-body text-muted-foreground">
              Östra Esplanadgatan 6, 22100 Mariehamn
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-body text-lg text-muted-foreground mb-6">
            Alla är välkomna att besöka S:t Görans kyrka.
          </p>
          <Link
            to="/gudstjanst-typer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-body font-medium hover:bg-primary/10 transition-colors"
          >
            Se våra gudstjänster
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Kontakt;
