const WelcomeSection = () => {
  return (
    <section id="om-oss" className="bg-secondary">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Välkommen till S:t Görans kyrka
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            En plats för bön, gemenskap och tro på Åland.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Mariehamns katolska församling är en del av den Heliga Katolska Kyrkan och tillhör Helsingfors katolska stift. Församlingen samlar troende från många olika bakgrunder och livssituationer, förenade i kyrkans tro, bön och sakramentala liv.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            S:t Görans kyrka är en plats för tillbedjan, stillhet och andlig fördjupning, men även för gemenskap, aktiviteter och möten mellan människor i vardagen.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Här finns utrymme för både personlig andakt och gemensamt församlingsliv – både vuxna, ungdomar och barn. Oavsett bakgrund är du varmt välkommen att delta i våra gudstjänster och i församlingens gemenskap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
