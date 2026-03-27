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
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-card rounded-xl p-8 lg:p-10 shadow-card hover:shadow-hover transition-shadow">
              <h3 className="font-display text-xl text-foreground mb-4">
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
          <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
            Församlingen tillhör Helsingfors katolska stift som omfattar hela Finland.
            Stiftet leds av biskopen av Helsingfors och samlar katoliker från hela landet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://katolinen.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Besök stiftets webbplats
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-lg font-body font-medium hover:bg-primary/10 transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default OmOss;
