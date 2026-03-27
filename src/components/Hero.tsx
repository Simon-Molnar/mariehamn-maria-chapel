import heroImage from "@/assets/hero-fresco.jpg";

const Hero = () => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: '50% 32%'
        }}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Mariehamns Katolska Församling
          </h1>
          <p 
            className="font-body text-lg sm:text-xl text-white/90 max-w-xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            En plats för bön, gemenskap och tro på Åland.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
