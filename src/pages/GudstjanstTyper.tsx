import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import gudstjanstHero from "@/assets/gudstjanst-hero.avif";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GudstjanstTyper = () => {
  const serviceTypes = [
    {
      title: "Mässa",
      description:
        "Mässan är den katolska gudstjänstens hjärta. Här samlas församlingen för att lyssna till Guds ord och fira eukaristin – det heliga sakrament där bröd och vin blir Kristi kropp och blod. Mässan firas på söndagar och vardagar.",
      practical: "Mässan varar cirka en timme. Alla är välkomna att delta, även om man inte är katolik.",
      cta: { label: "Se mässtider", href: "/gudstjanster" },
    },
    {
      title: "Eukaristisk tillbedjan",
      description:
        "Under eukaristisk tillbedjan placeras det konsekrerade brödet synligt på altaret. Församlingen samlas i tyst bön och tillbedjan inför Kristus, närvarande i sakramentet.",
      practical: "Man sitter eller knäböjer i tystnad. Inga förkunskaper behövs – kom som du är.",
    },
    {
      title: "Bikt",
      description:
        "Bikten, eller försoningens sakrament, är ett personligt samtal med en präst där man bekänner sina synder och tar emot Guds förlåtelse. Prästen har absolut tystnadsplikt.",
      practical: "Bikt erbjuds efter överenskommelse med prästen. Första gången? Prästen vägleder dig steg för steg.",
      cta: { label: "Kontakta prästen", href: "/kontakt" },
    },
    {
      title: "Rosenkransbön",
      description:
        "Rosenkransen är en meditativ bön där man tillsammans med Jungfru Maria begrundar händelser ur Jesu liv. Bönen bes gemensamt i församlingen, ofta före en mässa.",
      practical: "Texten följer ett fast mönster som är lätt att lära sig. Alla är välkomna att delta.",
    },
    {
      title: "Vesper (Aftonbön)",
      description:
        "Vesper är kyrkans traditionella aftonbön med psalmer, bibelläsning och böner. Den avslutar arbetsdagen med tacksägelse och förenar församlingen med hela kyrkans bön världen över.",
      practical: "Vespern följer en fast ordning. Böcker finns tillgängliga i kyrkan.",
    },
    {
      title: "Andakt",
      description:
        "Andakter är kortare gudstjänster med bön, sång och reflektion, ofta knutna till kyrkoårets högtider. Exempel är korsvägsandakt under fastetiden och majandakt till Jungfru Maria.",
      practical: "Andakterna är öppna för alla och kräver inga förberedelser.",
    },
  ];

  const faqItems = [
    {
      question: "Kan jag komma även om jag inte är katolik?",
      answer:
        "Ja, absolut. Alla är välkomna till alla gudstjänster. Du behöver inte vara döpt eller ha någon särskild bakgrund för att delta. Den enda skillnaden är att den heliga kommunionen (nattvarden) är förbehållen katoliker som förberett sig genom bikt.",
    },
    {
      question: "Måste jag kunna allt i förväg?",
      answer:
        "Nej, det behöver du inte. Det är helt i sin ordning att bara sitta med och följa med i det som sker. Mässböcker och texthäften finns tillgängliga, och församlingen hjälper gärna till.",
    },
    {
      question: "Hur går en mässa till?",
      answer:
        "Mässan har två huvuddelar: ordets gudstjänst med bibelläsningar och predikan, och eukaristins gudstjänst där bröd och vin frambärs och konsekreras. Mässan inleds med sång och bön och avslutas med en sändning och välsignelse. En söndagsmässa varar cirka en timme.",
    },
    {
      question: "Finns det gudstjänster på olika språk?",
      answer:
        "Mässan firas huvudsakligen på svenska, men delar av liturgin kan vara på latin eller finska. Kontakta församlingen för information om eventuella mässor på andra språk.",
    },
    {
      question: "Vad gör jag om jag är osäker?",
      answer:
        "Kom bara förbi. Sätt dig ner, lyssna och känn av stämningen. Ingen förväntar sig att du ska kunna allt. Du kan också kontakta församlingen i förväg om du vill ställa frågor.",
    },
    {
      question: "Kan barn vara med på gudstjänsten?",
      answer:
        "Ja, barn är alltid välkomna. Vissa söndagar ordnas söndagsskola parallellt med gudstjänsten, anpassad efter barnens ålder.",
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Gudstjänsttyper"
        description="Här presenteras de vanligaste formerna av gudstjänst och bön i församlingen. Alla är välkomna att delta."
        image={gudstjanstHero}
        imagePosition="center 70%"
      />

      {/* Intro */}
      <Section narrow>
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            Bön, mässa och sakrament
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Det katolska församlingslivet kretsar kring mässan, sakramenten och den gemensamma bönen.
            Utöver söndagsmässan finns det flera former av gudstjänst och bön som ger möjlighet
            till andlig fördjupning och stillhet i vardagen.
          </p>
        </div>
      </Section>

      {/* Service type cards */}
      <Section bg="secondary">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceTypes.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-hover transition-shadow flex flex-col"
            >
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4 italic">
                {service.practical}
              </p>
              {service.cta && (
                <Link
                  to={service.cta.href}
                  className="mt-auto inline-flex items-center text-sm font-body font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {service.cta.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* First-time visitor section */}
      <Section narrow>
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            För dig som besöker oss första gången
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Det spelar ingen roll om du aldrig har varit i en katolsk kyrka förut.
            Här är några saker som kan vara bra att veta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="font-display text-lg text-foreground mb-2">Alla är välkomna</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Du behöver inte vara katolik eller ens troende för att komma till en gudstjänst.
              Det är helt okej att bara sitta med, lyssna och uppleva stämningen.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="font-display text-lg text-foreground mb-2">Kom som du är</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Det finns inga krav på klädsel eller förkunskaper. Om du vill följa med i texterna
              finns mässböcker tillgängliga i kyrkan.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="font-display text-lg text-foreground mb-2">Kommunionen</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Den heliga kommunionen (nattvarden) är förbehållen katoliker som förberett sig.
              Som besökare kan du sitta kvar i bänken eller gå fram och ta emot en välsignelse
              genom att korsa armarna över bröstet.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="font-display text-lg text-foreground mb-2">Kom i god tid</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Försök att komma några minuter före gudstjänstens början. Det ger dig tid att
              hitta en plats och landa i den lugna stämningen.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 text-center">
            Vanliga frågor
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="font-display text-base md:text-lg text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Välkommen till S:t Görans kyrka
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            Oavsett om du söker en gudstjänst att delta i eller vill veta mer om
            församlingen – vi finns här för dig.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/gudstjanster"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Se aktuella mäss- och gudstjänsttider
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-lg font-body font-medium hover:bg-primary/10 transition-colors"
            >
              Kontakta församlingen
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default GudstjanstTyper;
