const WelcomeSection = () => {
  return (
    <section id="om-oss" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Välkommen till S:t Görans kyrka
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Mariehamns katolska församling är en del av den Heliga Katolska Kyrkan och tillhör Helsingfors katolska stift. Församlingen samlar troende från många olika bakgrunder och livssituationer, förenade i kyrkans tro, bön och sakramentala liv.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Församlingen är en plats för tillbedjan, stillhet och andlig fördjupning, men också för gemenskap, aktiviteter och möten mellan människor i vardagen.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Här finns utrymme för både personlig andakt och gemensamt församlingsliv, för barn, unga och vuxna. Oavsett om du är praktiserande katolik, söker dig tillbaka till kyrkan eller vill lära känna den katolska tron, är du varmt välkommen att delta i våra gudstjänster och i församlingens gemenskap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
