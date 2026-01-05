import heroImage from "@/assets/hero-mary.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Välkommen till{" "}
            <span className="text-primary">S:t Maria Församling</span>
          </h1>
          
          <p 
            className="font-body text-lg sm:text-xl md:text-2xl text-cream-soft max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Den katolska församlingen i Mariehamn – en gemenskap i tro, hopp och kärlek, 
            förankrad i den universella Kyrkans tvåtusenåriga tradition.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a 
              href="#massor" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors glow-gold"
            >
              Se Mässtider
            </a>
            <a 
              href="#om-oss" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-display text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors"
            >
              Läs Mer
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
