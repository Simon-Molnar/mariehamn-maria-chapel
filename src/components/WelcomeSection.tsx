const WelcomeSection = () => {
  return (
    <section id="om-oss" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Välkommen till S:t Görans kyrka
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Vi är en katolsk församling i Mariehamn som välkomnar alla att delta i våra 
            gudstjänster och vår gemenskap. Oavsett om du är katolik sedan länge, nyfiken 
            på tron eller söker en andlig hemvist – du är välkommen hos oss.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Vår församling tillhör Helsingfors katolska stift och är en del av den världsvida 
            katolska Kyrkan. Här möts vi för mässa, bön, gemenskap och lärande.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
