const SacramentsSection = () => {
  const sacraments = [
    { name: "Dopet", description: "Porten till det kristna livet och alla andra sakrament." },
    { name: "Konfirmationen", description: "Den Helige Andes gåva för att stärka den döpte i tron." },
    { name: "Eukaristin", description: "Mässoffret och Kristi verkliga närvaro under brödets och vinets gestalter." },
    { name: "Bikten", description: "Guds förlåtelse och försoning med Kyrkan." },
    { name: "De sjukas smörjelse", description: "Tröst och styrka för de sjuka och döende." },
    { name: "Prästvigningen", description: "Vigningen till tjänst i Kyrkans heliga ämbeten." },
    { name: "Äktenskapet", description: "Förbundet mellan man och kvinna som ett heligt sakrament." },
  ];

  return (
    <section id="sakrament" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            De Sju <span className="text-primary">Sakramenten</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Sakramenten är synliga tecken på Guds osynliga nåd, instiftade av Kristus 
            och anförtrodda åt Kyrkan för vår frälsning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sacraments.map((sacrament, index) => (
            <div 
              key={index}
              className="p-5 bg-card border border-border rounded hover:border-primary/40 hover:bg-primary/5 transition-all group cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="font-display text-sm text-primary">{index + 1}</span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {sacrament.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {sacrament.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-display text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Kontakta oss för sakramentsförberedelse
          </a>
        </div>
      </div>
    </section>
  );
};

export default SacramentsSection;
