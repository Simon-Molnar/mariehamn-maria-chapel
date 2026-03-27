interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
  imagePosition?: string;
}

const PageHero = ({ title, description, image, imagePosition = "center 60%" }: PageHeroProps) => {
  return (
    <section
      className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden"
      style={image ? {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: imagePosition,
      } : undefined}
    >
      {/* Overlay: dark gradient for images, rich dark background for non-image */}
      {image ? (
        <div className="absolute inset-0 gradient-hero" />
      ) : (
        <div className="absolute inset-0 bg-foreground/90" />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
