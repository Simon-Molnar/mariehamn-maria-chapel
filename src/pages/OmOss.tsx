import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import omOssHero from "@/assets/om-oss-hero.avif";

const OmOss = () => {
  const sections = [
    {
      title: "Vår historia",
      description: "S:t Görans kyrka i Mariehamn har tjänat den katolska gemenskapen på Åland sedan församlingen grundades. Kyrkan är uppkallad efter den helige Georg, skyddshelgon för riddare och soldater.",
    },
    {
      title: "Del av världskyrkan",
      description: "Som en del av Helsingfors katolska stift står församlingen i gemenskap med den världsvida Katolska kyrkan under påvens ledning. Kyrkan firar samma mässa och delar samma tro som katoliker över hela världen.",
    },
    {
      title: "Vårt uppdrag",
      description: "Församlingens uppdrag är att fira mässa, förvalta sakramenten, förkunna evangeliet och bygga en levande gemenskap kring Kristus. Genom bön, undervisning och diakoni strävar församlingen efter att vara en plats för möte med Gud.",
    },
    {
      title: "Gemenskap",
      description: "Församlingen är en gemenskap där människor i alla åldrar och från olika bakgrunder möts kring Kristus. Efter söndagens mässa samlas församlingen till kyrkkaffe för umgänge och gemenskap. Alla är välkomna att delta.",
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Om församlingen"
        description="Mariehamns katolska församling är en del av den världsvida Katolska kyrkan och tillhör Helsingfors katolska stift."
        image={omOssHero}
        imagePosition="center 62%"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-hover transition-shadow">
              <h3 className="font-display text-xl text-foreground mb-3">
                {section.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Helsingfors katolska stift
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            Församlingen tillhör Helsingfors katolska stift som omfattar hela Finland.
            Stiftet leds av biskopen av Helsingfors och samlar katoliker från hela landet.
          </p>
          <a
            href="https://katolinen.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
          >
            Besök stiftets webbplats
          </a>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-body text-muted-foreground mb-4">
            Församlingen välkomnar alla som söker gemenskap i den katolska tron.
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body">
            Kontakta oss för mer information
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default OmOss;
