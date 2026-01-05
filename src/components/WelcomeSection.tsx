const WelcomeSection = () => {
  return (
    <section id="om-oss" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Välkommen till S:t Görans kyrka
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            S:t Görans katolska församling i Mariehamn välkomnar alla till gudstjänst och gemenskap. Du är varmt välkommen.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Församlingen tillhör Helsingfors katolska stift och är en del av den världsvida 
            katolska Kyrkan. Här möts människor för mässa, bön, gemenskap och lärande.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
