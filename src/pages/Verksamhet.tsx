import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import verksamhetHero from "@/assets/verksamhet-hero.avif";

const Verksamhet = () => {
  const activities = [
    {
      title: "Söndagsskola",
      description: "Varje söndag under gudstjänsten samlas barnen för egen undervisning anpassad efter ålder. Genom berättelser, sånger och pyssel lär sig barnen om den kristna tron på ett lekfullt sätt.",
    },
    {
      title: "Ungdomsgrupp",
      description: "Församlingens ungdomar träffas regelbundet för gemenskap, samtal om tro och liv, samt olika aktiviteter. En plats för unga att växa i sin tro tillsammans med jämnåriga.",
    },
    {
      title: "Bibelstudium",
      description: "Gemensam läsning och fördjupning i Bibeln. Församlingen studerar tillsammans olika böcker och teman för att bättre förstå Guds ord och hur det kan tillämpas i livet.",
    },
    {
      title: "Kyrkkaffe",
      description: "Efter söndagens gudstjänst samlas församlingen för kaffe och gemenskap. Ett tillfälle att lära känna varandra bättre och bygga relationer.",
    },
    {
      title: "Kyrkokör",
      description: "Församlingens kör övar regelbundet och medverkar vid gudstjänster och högtider. Alla som vill sjunga är välkomna att delta, oavsett tidigare erfarenhet.",
    },
    {
      title: "Diakoni",
      description: "Genom diakonin når församlingen ut till människor i behov. Besök hos sjuka och äldre, insamlingar till välgörenhet och stöd till de som behöver hjälp i vardagen.",
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Verksamhet"
        description="Församlingen erbjuder en mängd olika aktiviteter för alla åldrar. Här finns gemenskap, lärande och möjlighet att växa i tro tillsammans."
        image={verksamhetHero}
        imagePosition="center 62%"
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-card rounded-xl p-8 lg:p-10 shadow-card hover:shadow-hover transition-shadow">
              <h3 className="font-display text-xl text-foreground mb-4">
                {activity.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Vill du delta?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
            Alla är välkomna att delta i församlingens aktiviteter. Kontakta oss för mer information
            eller kom bara förbi – nya ansikten i gemenskapen är alltid uppskattade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@mariehamnskatolskaforsamling.ax"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Kontakta oss
            </a>
            <Link
              to="/gudstjanst-typer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-body font-medium hover:bg-primary/10 transition-colors"
            >
              Se våra gudstjänster
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Verksamhet;
