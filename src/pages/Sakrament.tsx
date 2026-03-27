import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import sakramentHero from "@/assets/sakrament-hero.avif";

const Sakrament = () => {
  const sacraments = [
    {
      title: "Dopet",
      description: "Dopet är porten till det kristna livet och till Guds rikes gemenskap. Genom dopet blir vi Guds barn och medlemmar i Kristi kropp, kyrkan. Både barn och vuxna kan döpas.",
    },
    {
      title: "Konfirmationen",
      description: "Konfirmationen fullbordar dopets nåd genom den Helige Andes gåva. Den konfirmerade stärks för att vittna om Kristus i ord och handling.",
    },
    {
      title: "Eukaristin (Nattvarden)",
      description: "Eukaristin är centrum i kyrkans liv. I nattvarden tar vi emot Kristi kropp och blod under brödets och vinets gestalter. Detta sakrament firas vid varje mässa.",
    },
    {
      title: "Försoningens sakrament (Bikten)",
      description: "Genom bikten får vi ta emot Guds förlåtelse för våra synder. Prästen lyssnar under absolut tystnadsplikt och förmedlar Guds barmhärtighet och nåd.",
    },
    {
      title: "De sjukas smörjelse",
      description: "Detta sakrament ger tröst och styrka åt allvarligt sjuka. Prästen smörjer den sjuke med helig olja och ber för helande och frid.",
    },
    {
      title: "Vigningens sakrament",
      description: "Genom vigningen ordineras biskopar, präster och diakoner för att tjäna kyrkan. De vigs till att förkunna Guds ord och förvalta sakramenten.",
    },
    {
      title: "Äktenskapet",
      description: "Äktenskapet är ett förbund mellan man och kvinna inför Gud. Makarna ger sig åt varandra för livet och tar emot Guds välsignelse för sin gemenskap.",
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Sakrament"
        description="Sakramenten är heliga tecken instiftade av Kristus för att förmedla nåd. Genom dem möter vi Gud på ett konkret och verkligt sätt."
        image={sakramentHero}
        imagePosition="center 48%"
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sacraments.map((sacrament, index) => (
            <div key={index} className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-hover transition-shadow">
              <h3 className="font-display text-xl text-foreground mb-3">
                {sacrament.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {sacrament.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Frågor om sakramenten?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            Vill du veta mer om något sakrament eller förbereda dig för att ta emot ett?
            Kontakta prästen för ett personligt samtal.
          </p>
          <a
            href="mailto:info@mariehamnskatolskaforsamling.ax"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
          >
            Kontakta prästen
          </a>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-body text-muted-foreground mb-4">
            Alla sakrament firas i S:t Görans kyrka.
            Kontakta prästen för sakramentsförberedelse.
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body">
            Kontakta oss för mer information
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Sakrament;
