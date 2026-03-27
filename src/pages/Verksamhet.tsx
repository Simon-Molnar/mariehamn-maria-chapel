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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-hover transition-shadow">
              <h3 className="font-display text-xl text-foreground mb-3">
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
          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            Alla är välkomna att delta i församlingens aktiviteter. Kontakta oss för mer information
            eller kom bara förbi – nya ansikten i gemenskapen är alltid uppskattade.
          </p>
          <a
            href="mailto:info@mariehamnskatolskaforsamling.ax"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-body text-muted-foreground mb-4">
            Församlingen välkomnar alla att delta i aktiviteter och gemenskap.
          </p>
          <Link to="/gudstjanst-typer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body">
            Se våra gudstjänster
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Verksamhet;
