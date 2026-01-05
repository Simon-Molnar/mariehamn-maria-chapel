import heroImage from "@/assets/hero-fresco.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: '50% 25%'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
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
