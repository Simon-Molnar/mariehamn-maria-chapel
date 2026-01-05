const WelcomeSection = () => {
  return (
    <section id="om-oss" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Välkommen till S:t Görans kyrka
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Mariehamns katolska församling är en del av den världsvida Katolska kyrkan och samlar troende från många olika länder och livssituationer. I centrum för vårt församlingsliv står firandet av den heliga mässan, bön, sakramenten och gemenskapen kring Kristus.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Församlingen är en plats för tillbedjan, stillhet och fördjupning i tron, men också för möten mellan människor i vardagen. Här finns utrymme för både personlig andakt och gemensamt församlingsliv, för barn, unga och vuxna.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Oavsett om du är praktiserande katolik, söker dig tillbaka till kyrkan eller vill lära känna den katolska tron, är du varmt välkommen till våra gudstjänster och vår gemenskap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
