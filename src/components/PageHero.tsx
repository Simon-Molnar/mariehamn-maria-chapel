interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
  imagePosition?: string;
}

const PageHero = ({ title, description, image, imagePosition = "center 60%" }: PageHeroProps) => {
  if (image) {
    return (
      <section
        className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[30vh] min-h-[240px] flex items-center justify-center bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
          {title}
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
